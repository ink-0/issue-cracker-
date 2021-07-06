// interface PostProps {
//   path: string;
//   token: string;
//   body: any;
// }

export const getPost = async (
  path: string,
  token: string | null,
  body: any
): Promise<any> => {
  return await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
    .then((res) => console.log('SUCCESS', res))
    .then((error) => console.error(error));
};
