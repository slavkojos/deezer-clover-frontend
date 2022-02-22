import {
  Container,
  Box,
  Flex,
  Heading,
  Select,
  Spinner,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import TrackItem from '../components/TrackItem';
import TrackDetailsModal from '../components/TrackDetailsModal';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  fetchTopTracks,
  sortByDurationAsc,
  sortByDurationDesc,
  sortDefault,
} from '../store/chartsSlice';
import { useDisclosure } from '@chakra-ui/react';
export default function Home() {
  const dispatch = useDispatch();
  const { tracks, loading } = useSelector(state => state.tracks);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTrack, setSelectedTrack] = useState(null);
  useEffect(() => {
    document.title = 'TopPop Chart';
    dispatch(fetchTopTracks());
  }, []);
  const handleSort = e => {
    switch (e.target.value) {
      case 'ascending':
        dispatch(sortByDurationAsc());
        break;
      case 'descending':
        dispatch(sortByDurationDesc());
        break;
      default:
        dispatch(sortDefault());
    }
  };
  return (
    <Box>
      <ColorModeSwitcher />
      <Container maxW="container.xl">
        <Flex direction="column" width="100%" align="center" p={6}>
          <Heading size="3xl" mb={8}>
            TopPop Chart
          </Heading>
          <Select
            placeholder="Sort by duration"
            size="lg"
            w="25%"
            onChange={e => handleSort(e)}
          >
            <option value="ascending">From shortest to longest</option>
            <option value="descending">From longest to shortest</option>
          </Select>
        </Flex>
        <Flex direction="column" width="100%" align="center">
          {loading === 'loading' && <Spinner size="xl" />}
          {loading === 'loaded' &&
            tracks.map((track, index) => (
              <TrackItem
                key={index}
                index={index}
                track={track}
                onOpen={onOpen}
                setSelectedTrack={setSelectedTrack}
              />
            ))}
        </Flex>
      </Container>
      <TrackDetailsModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        track={tracks[selectedTrack]}
        setSelectedTrack={setSelectedTrack}
      />
    </Box>
  );
}
