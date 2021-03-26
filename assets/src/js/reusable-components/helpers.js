import {
  MESSAGE, NOTIFICATIONS_SETTINGS,
  SNACKBAR
} from "../actions/types";


// export const showSnackBar = (msg_content) => dispatch => {
//
//   dispatch({
//
//   });
// };
//
// // export const showSnackBar = (msg_content) => dispatch => {
// //   dispatch({
// //     type: NOTIFICATIONS_SETTINGS,
// //     notification_settings: settings
// //   })
// // };


export function showSnackBar(msg_content) {
  return {
    type: SNACKBAR,
    message: msg_content
  }
}

