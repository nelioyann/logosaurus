
const options = {
    threshold: 0.5,
    rootMargin: "50px",
  };
const cardObserver = new IntersectionObserver((entries, observer)=>
{
  for (const entry of entries)
  {
    // console.log(entry.target)
    // entry.target.classList.toggle("visible", entry.isIntersecting)
    entry.target.classList.toggle("visible", entry.isIntersecting)
  }
}, options)

// Use that IntersectionObserver to observe the visibility
// of some elements
for (const element of document.querySelectorAll('.card')) {
  cardObserver.observe(element);
}