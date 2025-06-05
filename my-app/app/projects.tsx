     "use client";
     import Slider from "react-slick";
     import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
     
     const projects = [
        {title: "sad", description: "asfsdf"},
        {title: "asdas", description: "asdasd"},

      ];


      export default function ProjectCarousel() {
        const settings = {
            dots: true, 
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            focusOnSelect: true
        };

        return (
            <Box width="100%" maxWidth="600px" mx="auto" my={4}>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <Card key={index} sx={{ borderRadius: 6, height: 300}}>
                    <CardContent sx={{ height: '100%'}}>
                        <Typography variant="h5">{project.title}</Typography>
                        <Divider />
                        <Typography>{project.description}
                        </Typography>
                    </CardContent>
                    </Card>
                ))}
            </Slider>
            </Box>  

        );
      }

      