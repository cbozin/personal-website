import Image from "next/image";
import { Typography, Box, Avatar, Stack, Divider, AppBar, Container, Button, Toolbar, Card, CardContent, Grid, styled, Paper, TextField } from "@mui/material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import Link from "next/link";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectCarousel from "./projects";


export default function Home() {
  return (
    <Box justifyContent={"center"} alignItems={"center"} height={"100vh"} width={"100vw"} display={"flex"} flexDirection={"column"}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>Carolyn Bozin</Typography>
          <Link href="#experience" passHref>
            <Button>Experience</Button>
          </Link>
          <Link href="#projects" passHref>
            <Button>Projects</Button>
          </Link>
          <Link href="#skills" passHref>
            <Button>Skills</Button>
          </Link>
          <Link href="#contact" passHref>
            <Button>Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Divider />
      <Box display={"flex"} flexDirection={"column"} width={"80%"} mt={"5%"} mb={"5%"} textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
        <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} mt={"120%"} mb={"40%"} width={"100%"}>
          <Avatar alt="profile photo" src="" sx={{ width: "10%", height: "60%" }} />
          <Typography variant="h1" m={"1%"} >{"Hi, I'm Carolyn."}</Typography>
          <Typography variant="body1">I am a Software Developer with an interest in backend development and data science. I graduated from Gonzaga University with a B.S. in Computer Science, where I was president of the Women in Computing Club.</Typography>
        </Stack>
      </Box>
      <Divider />
      <Box id={"experience"} display={"flex"} flexDirection={"column"} width={"80%"} mt={"5%"} mb={"5%"} textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
        <Typography variant="h2" mb={3}>My Experience</Typography>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h5" component="span">
                Library Student Lead
              </Typography>
              <Typography>
                ddddddds
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h5" component="span">
                Solutions Engineering Intern
              </Typography>
              <Typography>Because you need rest</Typography></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h5" component="span">
                Software Engineering Fellow
              </Typography>
              <Typography>Because you need rest</Typography></TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
      <Divider />
       <Typography variant="h2" mb={3}>My Projects</Typography>
      <ProjectCarousel/>

    </Box>
  );
}
