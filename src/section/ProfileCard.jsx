import profileImage from "../assets/images/fotoProfile.jpg";

const ProfileCard = () => {
  return (
    <div className="bg-primary-bg card p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300">
      <img
        src={profileImage}
        alt="Profile"
        className="rounded-full w-36 mx-auto mb-4 hover:scale-105 hover:shadow-xl transition duration-300"
      />

      <h4 className="text-lg font-bold text-text-primary">
        Faisa Aditya Athallah
      </h4>

      <p className="text-text-secondary">Web Developer – Graphics Designer</p>
      <p className="text-text-secondary mb-4">Sleman, D.I. Yogyakarta</p>

      {/* QUOTE */}
      <p className="italic text-sm text-text-secondary mb-4 opacity-80">
        “Kesadaran adalah rumahnya makna.” - Faisa Aditya
      </p>

      <a href="/assets/Resume-Faisa-Aditya.pdf" download>
        <button className="px-6 py-3 rounded-xl border border-text-primary text-text-primary font-semibold hover:bg-text-primary hover:text-primary-bg transition">
          Download CV
        </button>
      </a>
    </div>
  );
};

export default ProfileCard;
