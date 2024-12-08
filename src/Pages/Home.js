import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../Features/users/userSlice';
import UserCard from '../Components/UserCard';
import Filters from '../Components/Filter';
import Pagination from '../Components/Pagination';
import "./Home.css"


const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const currentPage = useSelector((state) => state.users.currentPage);
  const totalPages = useSelector((state) => state.users.totalPages);

  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});

  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, search, filters }));
  }, [dispatch, currentPage, search, filters]);

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleFilterChange = (newFilters) => setFilters(newFilters);

  const handlePageChange = (newPage) => dispatch(fetchUsers({ page: newPage, search, filters }));

  return (
    
    <div className='app' >
      
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={handleSearchChange}
      />
      <Filters onChange={handleFilterChange} />

      <div className="Ucard">
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>


      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>

  );
};

export default Home;
