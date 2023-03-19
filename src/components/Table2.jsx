// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Avatar } from "@mui/material";
// import CancelIcon from "@mui/icons-material/Cancel";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { Link } from "react-router-dom";

// import { useContext } from "react";
// import { AuthenticationContext } from "../Context/authenticationContext";

// function createData(Image, Name, Phone, Email, Profile, Approval) {
//   return { Image, Name, Phone, Email, Profile, Approval };
// }

// function getRows(data, token, refresh) {
//   let rows = [];
//   data.forEach((item) => {
//     rows.push(
//       createData(
//         <Avatar src={Urls.dp + item.dp} />,
//         item.user.name,
//         item.phoneNumber,
//         item.user.email,
//         <Link to={`/profile/${item.link}`}>
//           <p className="underline text-[#C38BFF]">View</p>
//         </Link>,
//         <>
//           <div
//             onClick={() => {
//               ApproveRejectTrainer(item.id, "Rejected", token).then(() => {
//                 refresh();
//               });
//             }}
//           >
//             <CancelIcon sx={{ color: "#FF0000" }} />
//           </div>
//           <div
//             onClick={() => {
//               ApproveRejectTrainer(item.id, "Approved", token).then(() => {
//                 refresh();
//               });
//             }}
//           >
//             <CheckCircleIcon sx={{ color: "#66C164" }} />
//           </div>
//         </>
//       )
//     );
//   });
//   return rows;
// }

// function Tablee(props) {
//   const data = props.data;
//   return (
//     <TableContainer
//       component={Paper}
//       sx={{
//         borderRadius: "20px",
//         width: "100%",
//         overflowX: "hidden",
//       }}
//     >
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell
//               sx={{
//                 fontWeight: "300",
//                 fontFamily: "Lexend",
//                 fontSize: "16px",
//                 color: "#22222280",
//               }}
//             >
//               Image
//             </TableCell>
//             <TableCell
//               sx={{
//                 fontWeight: "300",
//                 fontFamily: "Lexend",
//                 fontSize: "16px",
//                 color: "#22222280",
//               }}
//               align="center"
//             >
//               Name
//             </TableCell>
//             <TableCell
//               sx={{
//                 fontWeight: "300",
//                 fontFamily: "Lexend",
//                 fontSize: "16px",
//                 color: "#22222280",
//               }}
//               align="center"
//             >
//               Phone no
//             </TableCell>
//             <TableCell
//               sx={{
//                 fontWeight: "300",
//                 fontFamily: "Lexend",
//                 fontSize: "16px",
//                 color: "#22222280",
//               }}
//               align="center"
//             >
//               Email
//             </TableCell>
//             <TableCell
//               sx={{
//                 fontWeight: "300",
//                 fontFamily: "Lexend",
//                 fontSize: "16px",
//                 color: "#22222280",
//               }}
//               align="center"
//             >
//               Profile
//             </TableCell>
//             <TableCell
//               sx={{
//                 fontWeight: "300",
//                 fontFamily: "Lexend",
//                 fontSize: "16px",
//                 color: "#22222280",
//               }}
//               align="center"
//             >
//               Approval
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {getRows(data, session.sessionData.token, props.refresh).map(
//             (row, index) => (
//               <TableRow
//                 key={index}
//                 sx={{
//                   "&:last-child td, &:last-child th ,td ,th ": {
//                     borderBottomWidth: 0.2,
//                     borderBottomColor: "#AFAFAF45",
//                   },
//                 }}
//               >
//                 <TableCell component="th" scope="row">
//                   {row.Image}
//                 </TableCell>
//                 <TableCell
//                   align="center"
//                   sx={{
//                     fontFamily: "Lexend",
//                     fontWeight: "300",
//                     color: "#222222",
//                   }}
//                 >
//                   {row.Name}
//                 </TableCell>
//                 <TableCell
//                   align="center"
//                   sx={{
//                     fontFamily: "Lexend",
//                     fontWeight: "300",
//                     color: "#222222",
//                   }}
//                 >
//                   {row.Phone}
//                 </TableCell>

//                 <TableCell
//                   align="center"
//                   sx={{
//                     fontFamily: "Lexend",
//                     fontWeight: "300",
//                     color: "#222222",
//                   }}
//                 >
//                   {row.Email}
//                 </TableCell>

//                 <TableCell
//                   align="center"
//                   sx={{
//                     fontFamily: "Lexend",
//                     fontWeight: "300",
//                     color: "#222222",
//                   }}
//                 >
//                   <Link to="/Profile"> {row.Profile}</Link>
//                 </TableCell>

//                 <TableCell
//                   align="center"
//                   sx={{
//                     fontFamily: "Lexend",
//                     fontWeight: "300",
//                     color: "#222222",
//                   }}
//                 >
//                   {row.Approval}
//                 </TableCell>
//               </TableRow>
//             )
//           )}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default Tablee;
