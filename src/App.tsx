import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  NavBar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from '@/components';

const App = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ backgroundColor: '#000' }}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
