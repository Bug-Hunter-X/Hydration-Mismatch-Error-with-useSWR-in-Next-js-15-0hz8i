```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  // This will cause an error if there is no data
  const { data } = useSWR('/api/data');
  if (!data) return <p>Loading...</p>;

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