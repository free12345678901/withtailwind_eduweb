import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Menu, X, ChevronDown } from "lucide-react";
import { courses } from "@/data/courses";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const coursesDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target as Node)) {
                setIsCoursesOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [coursesDropdownRef]);

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-[100] backdrop-blur-sm bg-opacity-95">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/dist/assets/angel-logo-_HY9FyOc.png" alt="Angel Multimedia Institute Logo" className="h-8" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <HashLink
                            to="/#top"
                            smooth
                            className="text-gradient hover:text-brand-orange transition-colors font-medium"
                        >
                            Home
                        </HashLink>

                        {/* Courses Dropdown */}
                        <div className="relative" ref={coursesDropdownRef}>
                            <button
                                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                                className="text-gradient hover:text-brand-orange transition-colors font-medium flex items-center gap-1"
                            >
                                Courses
                                <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isCoursesOpen && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 py-2 max-h-96 overflow-y-auto z-50"
                                >
                                    {courses.map((course) => (
                                        <Link
                                            key={course.id}
                                            to={course.route}
                                            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-all border-l-4 border-transparent hover:border-brand-orange"
                                            onClick={() => setIsCoursesOpen(false)}
                                        >
                                            <div className="font-medium">{course.name}</div>
                                            <div className="text-sm text-gray-500">{course.duration}</div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            to="/100-job"
                            className="text-gradient hover:text-brand-orange transition-colors font-medium"
                        >
                            100% Job
                        </Link>

                        <Link
                            to="/contact"
                            className="text-gradient hover:text-brand-orange transition-colors font-medium"
                        >
                            Contact Us
                        </Link>

                        <Link
                            to="/about"
                            className="text-gradient hover:text-brand-orange transition-colors font-medium"
                        >
                            About Us
                        </Link>

                        <Link
                            to="/enroll"
                            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-glow hover-scale"
                        >
                            Enroll Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4">
                        <HashLink
                            to="/#top"
                            smooth
                            className="block py-2 text-gray-800 hover:text-brand-orange transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </HashLink>

                        <div>
                            <button
                                className="w-full text-left py-2 text-gray-800 hover:text-brand-orange transition-colors flex items-center justify-between"
                                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                            >
                                Courses
                                <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isCoursesOpen && (
                                <div className="pl-4 space-y-2 mt-2">
                                    {courses.map((course) => (
                                        <Link
                                            key={course.id}
                                            to={course.route}
                                            className="block py-2 text-gray-600 hover:text-brand-orange transition-colors text-sm"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {course.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            to="/100-job"
                            className="block py-2 text-gray-800 hover:text-brand-orange transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            100% Job
                        </Link>

                        <Link
                            to="/contact"
                            className="block py-2 text-gray-800 hover:text-brand-orange transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Us
                        </Link>

                        <Link
                            to="/about"
                            className="block py-2 text-gray-800 hover:text-brand-orange transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            About Us
                        </Link>

                        <Link
                            to="/enroll"
                            className="mt-4 block w-full text-center bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-glow hover-scale"
                            onClick={() => setIsOpen(false)}
                        >
                            Enroll Now
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
