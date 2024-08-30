import profileImage from "../assets/images/fotoProfile.jpg";

const ProfileCard = () => {
  return (
    <div className="bg-primary-bg card p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300">
      <img
        src={profileImage}
        alt="Profile"
        className="rounded-full w-36 mx-auto mb-4 hover:scale-105 hover:shadow-xl transition duration-300"
      />
      <h4 className="text-lg font-bold text-text-primary font-sans">
        Faisa Aditya Athallah
      </h4>
      <p className="text-text-secondary font-serif">
        Web Developer - Graphics Designer
      </p>
      <p className="text-text-secondary font-serif">Sleman, D.I. Yogyakarta</p>
      <a href="/path/to/your/cv.pdf" download>
        <button className="mt-3 bg-accent text-text-primary hover:bg-gray-600 transition-colors py-1 px-4 rounded-lg font-sans">
          Download CV
        </button>
      </a>
    </div>
  );
};

export default ProfileCard;
