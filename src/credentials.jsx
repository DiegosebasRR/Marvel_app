import md5 from "md5";

export const getCredentials = () => {
  const apikey = "f6453b56ab6ae0ee8d31de19e8f884a7";
  const privatekey = "71c8528798959efc1181d5c846a74935175ec1fc";
  const ts = new Date().getTime();
  const stringToHash = ts + privatekey + apikey;
  const hash = md5(stringToHash);

  const params = {
    ts,
    apikey,
    hash,
  };
  return params;
};
