export default function NoteSkeleton() {
  return (
    <div className="card bg-amber-100 border border-base-300">
      <div className="card-body gap-3">
        <div className="skeleton h-6 w-2/3" />
        <div className="skeleton h4 w-full" />
        <div className="skeleton h4 w-5/6" />
        <div className="skeleton mt-2 h-3 w-1/4" />
      </div>
    </div>
  );
}
