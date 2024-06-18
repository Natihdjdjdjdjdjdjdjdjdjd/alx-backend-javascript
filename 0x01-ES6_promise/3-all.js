import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((resu) => {
      console.log(`${resu[0].body} ${resu[1].firstName} ${resu[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
