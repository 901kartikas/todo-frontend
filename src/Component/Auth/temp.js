// import React, { useState } from "react";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import axios from "axios";
// import {Redirect} from 'react-router-dom'

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignIn() {
//   state = {};

//   const classes = useStyles();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const onChange5 = (e) => {
//     setUsername(e.target.value);
//   };
//   const onChange6 = (e) => {
//     setPassword(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       username,
//       password,
//     };
//     axios
//       .post("http://192.168.43.13:5000/api/ApplicationUser/Login", data)
//       .then((res) => {
//         localStorage.setItem("token", res.data.token);
//         this.setState({ loggedIn: true });
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   render() {
//     if (this.state.loggedIn) {
//        return <Redirect to={'/home'}/>
//     }
//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} onSubmit={handleSubmit} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             label="Username"
//             autoFocus
//             onChange={onChange5}
//             value={username}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             onChange={onChange6}
//             value={password}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="/home" variant="body2">
//                 Lanjutkan
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="/daftar" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={8}></Box>
//     </Container>
//   );
// }