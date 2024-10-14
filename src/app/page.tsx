import Link from 'next/link';
import countries from '../../countries/page';

export default function HomePage() {
  return (
    <div>
      <h1>Country List</h1>
      <ul>
        {Object.keys(countries).map((countryKey) => (
          <li key={countryKey}>
            <Link href={`/Country/${countryKey}`}>{countries[countryKey].name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}