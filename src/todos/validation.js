export function validateInfo(title, body) {
  let errors = {};

  if (!title) {
    errors.title = "Title is required";
  } else if (title.length > 20) {
    errors.title = "You need to add less than 20 characters";
  } else {
    errors.title = "";
  }

  if (!body) {
    errors.body = "Body is required";
  } else {
    errors.body = "";
  }

  return errors;
}
