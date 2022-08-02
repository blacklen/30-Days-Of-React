export default function Profile({ avatar, skills }) {
  return (
    <div className="profile">
      <div className="info">
        <img className="avatar" src={avatar} alt="avatar" />
        <h3> JANE </h3>
        <i> Software Engineer, Vietnam</i>
      </div>
      <h3> SKILLS </h3>
      <div className="skills">
        {
          skills.map((skill, index) => (
            <div className="skill" key={index}> {skill} </div>
          ))
        }
      </div>
      <div className="timeline">Joined on Aug 1, 2013</div>
    </div>
  )
}
