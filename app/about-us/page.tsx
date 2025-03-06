import CardLayout from "@/components/CardLayout";

export default function AboutUs() {
  return (
    <CardLayout title="About Us">
      <div className="text-gray-300 text-center max-w-2xl mx-auto">
        <p className="mb-6">
          Welcome to my first-ever deployed Next.js project—a milestone in my development journey!
        </p>
        <p className="mb-6">
          I created this project to deepen my understanding of Next.js and modern web development concepts.
          Along the way, I explored and implemented cutting-edge technologies, including:
        </p>
        <ul className="mb-6 text-left list-disc list-inside">
          <li>Next.js Server Actions and Mutations, leveraging the latest advancements in the framework</li>
          <li>React and Tailwind CSS for a responsive, stylish user interface</li>
          <li>Color theory principles to craft a visually appealing and cohesive design</li>
        </ul>
        <p>
          This project reflects my passion for learning and experimentation. I’m excited to share it with you
          and hope you enjoy exploring it as much as I enjoyed building it. Thank you for being part of this journey!
        </p>
      </div>
    </CardLayout>
  );
}
