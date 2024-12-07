```javascript
// pages/about.js
import useSWR from 'swr';
import { useSWRConfig } from 'swr';

function About() {
  const { data, error } = useSWR('/api/data');
  const { mutate } = useSWRConfig();

  if (error) return <p>Error fetching data</p>;
  if (!data) {
    // Fallback content during SSR
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <h1>About Us</h1>
      <p>Some information about us</p>
      <pre>{JSON.stringify(data, null, 2)}</pre> 
    </div>
  );
}

export default About; 
```
```javascript
//pages/api/data.js
// Simulate an API call with a delay
export default async function handler(req, res) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  res.status(200).json({ message: 'Data fetched successfully!' });
}
```