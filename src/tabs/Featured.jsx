import { CheckSquare, FilePlus, LayoutDashboard, Smartphone } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FilePlus className="w-10 h-10 text-purple-400" />,
      title: "Easy Submission",
      description: "Submit assignments in just a few clicks with a streamlined process.",
    },
    {
      icon: <CheckSquare className="w-10 h-10 text-green-400" />,
      title: "Review System",
      description: "Get accurate feedback and grades on your submitted assignments.",
    },
    {
      icon: <LayoutDashboard className="w-10 h-10 text-yellow-400" />,
      title: "Organized Dashboard",
      description: "Effortlessly manage and track all assignments in one place.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-400" />,
      title: "Accessible Anytime",
      description: "Access assignments and track progress from any device.",
    },
  ];

  return (
    <section className="py-16 mx-4 lg:mx-6 rounded-lg my-4 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-200 mb-4">
            Elevate Your Assignment Experience
          </h2>
          <p className="text-gray-400">
            Our platform makes managing, submitting, and reviewing assignments effortless, helping you stay organized and efficient.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-[#0f172a] shadow-lg rounded-2xl border border-gray-700 hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
