import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

interface FooterProps {
    title: string;
    description: string;
    contactInfo: {
        phone: string;
        email: string;
        location: string;
    };
    services: { name: string }[];
}

const Footer = ({ title, description, contactInfo, services }: FooterProps) => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {title.split(' ')[0]} <span className="text-blue-400">{title.split(' ')[1]}</span>
            </h3>
            <p className="text-gray-300">{description}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map(service => <li key={service.name}>{service.name}</li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} <Link href = "/admin">Pressure Bros.</Link> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;