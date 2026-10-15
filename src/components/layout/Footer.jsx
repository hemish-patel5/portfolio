export default function Footer() {
  return (
    <footer className="dark-grid text-white">
      <div className="mx-auto flex min-h-[64px] w-[min(1340px,calc(100%_-_2rem))] flex-col justify-center gap-1 py-3 text-sm text-gray-300 sm:flex-row sm:items-center sm:justify-between sm:text-base">
        <p>&copy; {new Date().getFullYear()} Hemish Patel.</p>
        <p>Auckland, New Zealand</p>
      </div>
    </footer>
  );
}
