import "./lesson.module.css";

const LessonCard = ({ name, image, age }) => {
  return (
    <section>
      <main>
        <img src={image} alt="" />
        <div>
          <p>Lesson Name: <span>{name}</span> </p>
          <p>Lesson Hour: <span>{age}</span> </p>
        </div>
      </main>
    </section>
  );
};

export default LessonCard;
