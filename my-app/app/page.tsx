import Image from "next/image";
import { Typography, Box, Avatar, Stack, Divider, AppBar, Container, Button, Toolbar, Card, CardContent, Grid, styled, Paper } from "@mui/material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";


export default function Home() {
  return (
    <Box justifyContent={"center"} alignItems={"center"} height={"100vh"} width={"100vw"} display={"flex"} flexDirection={"column"}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>Carolyn Bozin</Typography>
          <Button color="inherit" href="/sign-in">Projects</Button>
          <Button color="inherit" href="/sign-up">Experience</Button>
          <Button color="inherit" href="/sign-in">Skills</Button>
          <Button color="inherit" href="/sign-up">Contact</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Divider />
      <Stack justifyContent={"center"} alignItems={"center"} width={"80%"} height={"20%"} direction={"column"} mt={"40%"} mb={"30%"}>
        <Avatar alt="profile photo" src="" sx={{ width: "12%", height: "50%" }} />
        <Typography variant="h1" m={"1%"} >Hi, I'm Carolyn.</Typography>
        <Typography>Carolyn is ...............................................................................</Typography>
      </Stack>
      <Divider />
      <Typography variant="h2">My Experience</Typography>
      <Box display={"flex"} flexDirection={"column"} width={"80%"} mt={"5%"} mb={"10%"}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
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
              <Typography variant="h6" component="span">
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
              <Typography variant="h6" component="span">
                Software Engineering Fellow
              </Typography>
              <Typography>Because you need rest</Typography></TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
      <Divider />
      <Typography variant="h2">My Projects</Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Card>
            <CardContent>
              <Typography>Test
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="h2">My Skills</Typography>
      <Typography variant="h2">Contact Me!</Typography>
    </Box>
  );
}
