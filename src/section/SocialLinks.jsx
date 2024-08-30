const SocialLinks = () => {
  return (
    <div className="card mt-6 p-4 rounded-lg shadow-lg bg-primary-bg">
      <ul className="list-group">
        {/* <li className="list-group-item flex justify-between items-center  text-text-primary">
          <h6 className="text-text-primary">Website</h6>
          <span className="text-text-secondary">Upcoming</span>
        </li> */}
        <li className="list-group-item flex justify-between items-center  text-text-primary">
          <h6 className="text-text-primary">Github</h6>
          <span className="text-text-secondary">Faisaaditya</span>
        </li>
        <li className="list-group-item flex justify-between items-center  text-text-primary">
          <h6 className="text-text-primary">Twitter</h6>
          <span className="text-text-secondary">@adityaAtha</span>
        </li>
        <li className="list-group-item flex justify-between items-center  text-text-primary">
          <h6 className="text-text-primary">Instagram</h6>
          <span className="text-text-secondary">faisaaditya</span>
        </li>
        <li className="list-group-item flex justify-between items-center  text-text-primary">
          <h6 className="text-text-primary">Facebook</h6>
          <span className="text-text-secondary">Faisa Aditya</span>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
