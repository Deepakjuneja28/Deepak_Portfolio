const services = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Creating simple and responsive websites to help you establish an online presence.",
  },
  {
    id: 2,
    title: "UI/UX Enhancements",
    description:
      "Improving the user interface and experience for small-scale projects using modern design principles.",
  },
  {
    id: 3,
    title: "Portfolio Websites",
    description:
      "Developing personal or business portfolio websites to showcase skills, projects, or services effectively.",
  },
  {
    id: 4,
    title: "SEO Setup",
    description:
      "Implementing foundational SEO practices to enhance website visibility on search engines.",
  },
  {
    id: 5,
    title: "Responsive Design",
    description:
      "Ensuring websites are optimized for all devices, including mobile, tablet, and desktop.",
  },
];

export const Services = () => {
  return (
    <section className="text-white py-20 services">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2 className="text-6xl text-purple-300 font-extrabold sticky top-20 ">SERVICES</h2>
        </div>
        <div className="md:w-3/4">
          {services.map((service) => (
            <div key={service.id} className="mb-16 flex items-start">
              <div className="text-purple-300 font-bold text-5xl mr-6">
                {service.id}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
