import React, { useState } from "react";
import { Link } from "react-router";
import {
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdClose } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footers = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "unset";
  };

  const modalContent = {
    about: {
      title: "About HobbyHub",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-white/80 roboto-regular leading-relaxed">
            HobbyHub is a community-driven platform designed to bring people
            together through shared interests and passions. Whether you're into
            photography, hiking, coding, book clubs, or any other hobby, we
            provide the perfect space to connect with like-minded individuals.
          </p>
          <p className="text-sm text-white/80 roboto-regular leading-relaxed">
            Our mission is to foster meaningful connections and create vibrant
            communities where members can learn, share, and grow together.
            Founded in 2024, we've helped thousands of people discover new
            friendships and explore their passions.
          </p>
          <p className="text-sm text-white/80 roboto-regular leading-relaxed">
            Join us today and become part of a global network of hobby
            enthusiasts who believe that life is better when shared with others
            who understand your passions.
          </p>
        </div>
      ),
    },
    help: {
      title: "Help Center",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-white/80 roboto-regular leading-relaxed">
            Welcome to the HobbyHub Help Center! We're here to assist you with
            any questions or issues you may encounter.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-bold text-cpink dark:text-lpurple roboto-bold mb-2">
                Getting Started
              </h4>
              <p className="text-xs text-white/70 roboto-regular">
                Learn how to create your profile, join groups, and start
                connecting with fellow hobbyists in your area.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-cpink dark:text-lpurple roboto-bold mb-2">
                Managing Groups
              </h4>
              <p className="text-xs text-white/70 roboto-regular">
                Discover how to create, edit, and manage your own hobby groups,
                including member management and event planning.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-cpink dark:text-lpurple roboto-bold mb-2">
                Contact Support
              </h4>
              <p className="text-xs text-white/70 roboto-regular">
                Can't find what you're looking for? Our support team is
                available 24/7 at support@hobbyhub.com
              </p>
            </div>
          </div>
        </div>
      ),
    },
    guidelines: {
      title: "Community Guidelines",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-white/80 roboto-regular leading-relaxed">
            At HobbyHub, we're committed to maintaining a safe, respectful, and
            inclusive community for all members. Please follow these guidelines:
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-bold text-cpink dark:text-lpurple roboto-bold mb-1">
                1. Be Respectful
              </h4>
              <p className="text-xs text-white/70 roboto-regular">
                Treat all members with kindness and respect. Harassment,
                bullying, or discriminatory behavior will not be tolerated.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-cpink dark:text-lpurple roboto-bold mb-1">
                2. Keep It Relevant
              </h4>
              <p className="text-xs text-white/70 roboto-regular">
                Share content that's relevant to your group's hobby or interest.
                Spam and off-topic posts may be removed.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-cpink dark:text-lpurple roboto-bold mb-1">
                3. Protect Privacy
              </h4>
              <p className="text-xs text-white/70 roboto-regular">
                Never share personal information of other members without their
                consent. Respect everyone's privacy.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-cpink dark:text-lpurple roboto-bold mb-1">
                4. Report Issues
              </h4>
              <p className="text-xs text-white/70 roboto-regular">
                If you see content that violates our guidelines, please report
                it to our moderation team immediately.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    privacy: {
      title: "Privacy Policy",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-white/80 roboto-regular leading-relaxed">
            Your privacy is important to us. This policy outlines how we
            collect, use, and protect your personal information.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-bold text-cpink dark:text-lpurple roboto-bold mb-2">
                Information We Collect
              </h4>
              <p className="text-xs text-white/70 roboto-regular">
                We collect information you provide when creating an account,
                joining groups, or interacting with other members. This includes
                your name, email, profile photo, and activity within groups.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-cpink dark:text-lpurple roboto-bold mb-2">
                How We Use Your Data
              </h4>
              <p className="text-xs text-white/70 roboto-regular">
                Your data helps us provide better services, connect you with
                relevant groups, and improve your overall experience. We never
                sell your personal information to third parties.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-cpink dark:text-lpurple roboto-bold mb-2">
                Your Rights
              </h4>
              <p className="text-xs text-white/70 roboto-regular">
                You have the right to access, modify, or delete your personal
                data at any time. Contact us at privacy@hobbyhub.com for any
                privacy-related concerns.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    terms: {
      title: "Terms of Service",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-white/80 roboto-regular leading-relaxed">
            By using HobbyHub, you agree to comply with these terms and
            conditions. Please read them carefully.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-bold text-cpink dark:text-lpurple roboto-bold mb-2">
                User Responsibilities
              </h4>
              <p className="text-xs text-white/70 roboto-regular">
                You are responsible for maintaining the security of your
                account, complying with our community guidelines, and ensuring
                all content you post is appropriate and legal.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-cpink dark:text-lpurple roboto-bold mb-2">
                Acceptable Use
              </h4>
              <p className="text-xs text-white/70 roboto-regular">
                HobbyHub is intended for legitimate hobby and community-building
                purposes. Any misuse, including spam, harassment, or illegal
                activities, will result in account termination.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-cpink dark:text-lpurple roboto-bold mb-2">
                Content Ownership
              </h4>
              <p className="text-xs text-white/70 roboto-regular">
                You retain ownership of content you post, but grant HobbyHub a
                license to display and distribute it within the platform to
                facilitate group interactions.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-cpink dark:text-lpurple roboto-bold mb-2">
                Limitation of Liability
              </h4>
              <p className="text-xs text-white/70 roboto-regular">
                HobbyHub is provided "as is" without warranties. We are not
                liable for any damages arising from your use of the platform.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  };

  const Modal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4
          bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto
            rounded-2xl border border-white/20
            bg-center bg-cover bg-no-repeat
            bg-[linear-gradient(180deg,rgba(0,0,0,.85),rgba(0,0,0,.75)),url('https://i.postimg.cc/d3sJWt3P/Purple-and-Black-Modern-Login-and-Sign-up-Website-Page-UI-Desktop-Prototype.png')]
            dark:bg-[linear-gradient(180deg,rgba(0,0,0,.95),rgba(0,0,0,.85)),url('https://i.postimg.cc/g0Ps8yCt/bgauth.png')]
            shadow-2xl backdrop-blur-xl
            p-6 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4
              w-8 h-8 rounded-lg
              bg-white/10 hover:bg-red-600
              flex items-center justify-center
              transition-all duration-200
              border border-white/20"
          >
            <MdClose size={20} className="text-white" />
          </button>

          {/* Modal Header */}
          <h3 className="text-xl sm:text-2xl font-bold text-cpink dark:text-lpurple roboto-bold mb-6">
            {title}
          </h3>

          {/* Modal Content */}
          <div className="roboto-regular">{content}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <footer
        className="relative mt-auto
      bg-center bg-cover bg-no-repeat
      bg-[linear-gradient(180deg,rgba(0,0,0,.75),rgba(0,0,0,.85)),url('https://i.postimg.cc/d3sJWt3P/Purple-and-Black-Modern-Login-and-Sign-up-Website-Page-UI-Desktop-Prototype.png')]
      dark:bg-[linear-gradient(180deg,rgba(0,0,0,.85),rgba(0,0,0,.95)),url('https://i.postimg.cc/g0Ps8yCt/bgauth.png')]
      border-t border-white/10
      text-white"
      >
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-cpink dark:text-lpurple roboto-bold">
                HobbyHub
              </h3>
              <p className="text-xs sm:text-sm text-white/70 roboto-regular leading-relaxed">
                Connect with people who share your passions. Build communities,
                make friends, and explore new hobbies together.
              </p>
              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-cpink dark:hover:bg-lpurple
                  flex items-center justify-center
                  transition-all duration-200 hover:scale-110
                  border border-white/10 hover:border-white/20"
                >
                  <FaTwitter size={16} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-cpink dark:hover:bg-lpurple
                  flex items-center justify-center
                  transition-all duration-200 hover:scale-110
                  border border-white/10 hover:border-white/20"
                >
                  <FaYoutube size={16} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-cpink dark:hover:bg-lpurple
                  flex items-center justify-center
                  transition-all duration-200 hover:scale-110
                  border border-white/10 hover:border-white/20"
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-cpink dark:hover:bg-lpurple
                  flex items-center justify-center
                  transition-all duration-200 hover:scale-110
                  border border-white/10 hover:border-white/20"
                >
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-white roboto-bold">
                Quick Links
              </h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  to="/groups"
                  className="text-xs sm:text-sm text-white/70 hover:text-cpink dark:hover:text-lpurple
                  roboto-regular transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Browse Groups
                </Link>
                <Link
                  to="/mygroups"
                  className="text-xs sm:text-sm text-white/70 hover:text-cpink dark:hover:text-lpurple
                  roboto-regular transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  My Groups
                </Link>
                <Link
                  to="/creategroup"
                  className="text-xs sm:text-sm text-white/70 hover:text-cpink dark:hover:text-lpurple
                  roboto-regular transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Create Group
                </Link>
                <button
                  onClick={() => openModal("about")}
                  className="text-xs cursor-pointer sm:text-sm text-white/70 hover:text-cpink dark:hover:text-lpurple
                  roboto-regular transition-colors duration-200 hover:translate-x-1 inline-block text-left"
                >
                  About Us
                </button>
              </nav>
            </div>

            {/* Support */}
            <div className="space-y-4 ">
              <h4 className="text-base sm:text-lg font-bold text-white roboto-bold">
                Support
              </h4>
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => openModal("help")}
                  className="text-xs cursor-pointer sm:text-sm text-white/70 hover:text-cpink dark:hover:text-lpurple
                  roboto-regular transition-colors duration-200 hover:translate-x-1 inline-block text-left"
                >
                  Help Center
                </button>
                <button
                  onClick={() => openModal("guidelines")}
                  className="text-xs cursor-pointer sm:text-sm text-white/70 hover:text-cpink dark:hover:text-lpurple
                  roboto-regular transition-colors duration-200 hover:translate-x-1 inline-block text-left"
                >
                  Community Guidelines
                </button>
                <button
                  onClick={() => openModal("privacy")}
                  className="text-xs cursor-pointer sm:text-sm text-white/70 hover:text-cpink dark:hover:text-lpurple
                  roboto-regular transition-colors duration-200 hover:translate-x-1 inline-block text-left"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => openModal("terms")}
                  className="text-xs cursor-pointer sm:text-sm text-white/70 hover:text-cpink dark:hover:text-lpurple
                  roboto-regular transition-colors duration-200 hover:translate-x-1 inline-block text-left"
                >
                  Terms of Service
                </button>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-white roboto-bold">
                Get in Touch
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MdEmail
                    className="text-cpink dark:text-lpurple flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <a
                    href="mailto:support@hobbyhub.com"
                    className="text-xs sm:text-sm text-white/70 hover:text-cpink dark:hover:text-lpurple
                    roboto-regular transition-colors duration-200"
                  >
                    anantoshahrear10@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <IoLocationSharp
                    className="text-cpink dark:text-lpurple flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <p className="text-xs sm:text-sm text-white/70 roboto-regular">
                    Aftabnagar ,Block F, Sector 2
                    <br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Newsletter */}
              <div className="pt-2">
                <p className="text-xs text-white/60 roboto-regular mb-2">
                  Subscribe to our newsletter
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 rounded-lg
                    bg-white/10 border border-white/20
                    text-white text-xs
                    placeholder:text-white/40
                    focus:outline-none focus:border-cpink dark:focus:border-lpurple
                    transition-colors"
                  />
                  <button
                    onClick={() => {
                      alert("এই ফিচার পরে আনবো! :)");
                    }}
                    className="px-4 py-2 cursor-pointer rounded-lg
                    bg-cpink dark:bg-lpurple
                    hover:bg-cpink/80 dark:hover:bg-lpurple/80
                    text-white text-xs font-semibold
                    transition-all duration-200
                    active:scale-95"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="border-t border-white/10
        bg-black/20 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-xs sm:text-sm text-white/60 roboto-regular text-center sm:text-left">
                © {new Date().getFullYear()} HobbyHub. All rights reserved.
              </p>

              {/* Additional Links */}
              <div className="flex gap-4 sm:gap-6">
                <a
                  href="#"
                  className="text-xs text-white/60 hover:text-white roboto-regular transition-colors"
                >
                  Cookies
                </a>
                <a
                  href="#"
                  className="text-xs text-white/60 hover:text-white roboto-regular transition-colors"
                >
                  Accessibility
                </a>
                <a
                  href="#"
                  className="text-xs text-white/60 hover:text-white roboto-regular transition-colors"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal
        isOpen={activeModal === "about"}
        onClose={closeModal}
        title={modalContent.about.title}
        content={modalContent.about.content}
      />
      <Modal
        isOpen={activeModal === "help"}
        onClose={closeModal}
        title={modalContent.help.title}
        content={modalContent.help.content}
      />
      <Modal
        isOpen={activeModal === "guidelines"}
        onClose={closeModal}
        title={modalContent.guidelines.title}
        content={modalContent.guidelines.content}
      />
      <Modal
        isOpen={activeModal === "privacy"}
        onClose={closeModal}
        title={modalContent.privacy.title}
        content={modalContent.privacy.content}
      />
      <Modal
        isOpen={activeModal === "terms"}
        onClose={closeModal}
        title={modalContent.terms.title}
        content={modalContent.terms.content}
      />
    </>
  );
};

export default Footers;
