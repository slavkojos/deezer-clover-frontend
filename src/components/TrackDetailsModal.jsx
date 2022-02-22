import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
  Badge,
} from '@chakra-ui/react';
import { normalTimeFormat } from '../utils/functions';
export default function TrackDetailsModal({
  isOpen,
  onOpen,
  onClose,
  track,
  setSelectedTrack,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Track details</ModalHeader>
        <ModalCloseButton
          onClick={() => {
            setSelectedTrack(null);
          }}
        />
        <ModalBody>
          {track && (
            <Flex direction="column">
              <Flex align="center" my={1}>
                <Badge mr={1} colorScheme="red">
                  Title:
                </Badge>
                <Text>{track.title_short}</Text>
              </Flex>
              <Flex align="center" my={1}>
                <Badge mr={1} colorScheme="orange">
                  Position:
                </Badge>
                <Text>{track.position}</Text>
              </Flex>
              <Flex align="center" my={1}>
                <Badge mr={1} colorScheme="green">
                  Artist:
                </Badge>
                <Text>{track.artist.name}</Text>
              </Flex>
              <Flex my={1} align="center">
                <Badge mr={1} colorScheme="blue">
                  Duration:
                </Badge>
                <Text>{normalTimeFormat(track.duration)}</Text>
              </Flex>
            </Flex>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
