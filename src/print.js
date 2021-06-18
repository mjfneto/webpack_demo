import _ from "lodash";

export default function printMe() {
  console.log(_.join(["I", "get called", "from print.js!"], " "));
}
