import { Box, Grid, GridItem, Text, Image, Heading } from "@chakra-ui/react";

const Index = () => {
  // Example data that would represent listings
  const listings = [
    {
      id: 1,
      title: "Beachfront Villa",
      imageUrl: "https://images.unsplash.com/photo-1462830216937-416fec1e5609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWFjaGZyb250JTIwdmlsbGF8ZW58MHx8fHwxNzA4ODA2MDU5fDA&ixlib=rb-4.0.3&q=80&w=1080",
      pricePerNight: "$350",
    },
    {
      id: 2,
      title: "Mountain Cabin",
      imageUrl: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNhYmlufGVufDB8fHx8MTcwODgwNjA1OXww&ixlib=rb-4.0.3&q=80&w=1080",
      pricePerNight: "$200",
    },
    {
      id: 3,
      title: "Urban Apartment",
      imageUrl: "https://images.unsplash.com/photo-1668584054035-f5ba7d426401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFwYXJ0bWVudHxlbnwwfHx8fDE3MDg4MDYwNTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
      pricePerNight: "$100",
    },
    // ... more listings
  ];

  return (
    <Box p={4}>
      <Heading mb={6}>Explore Nearby Stays</Heading>
      <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
        {listings.map((listing) => (
          <GridItem key={listing.id} borderRadius="lg" overflow="hidden">
            <Image src={listing.imageUrl} alt={listing.title} boxSize="100%" objectFit="cover" />
            <Box p={4}>
              <Text fontWeight="bold" fontSize="lg">
                {listing.title}
              </Text>
              <Text color="gray.500">{listing.pricePerNight} / night</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
