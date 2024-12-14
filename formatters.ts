export function formatRuntime(runtime: string): string {
  const minutes = parseInt(runtime);
  if (isNaN(minutes)) return runtime;
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  return `${hours}h ${remainingMinutes}m`;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatRating(rating: string): string {
  const numRating = parseFloat(rating);
  return isNaN(numRating) ? rating : numRating.toFixed(1);
}