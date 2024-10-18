import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Education_details from "@/eduction-data";
import Title from "../Title/Title";
import { Timeline } from 'antd';
// import './education.css'

export default function EducationComponent() {
  return (
    <section className="education-section mx-auto px-4 font-boska">
      <Title title="Education" subtitle="Padhai Likhai" />
      <Timeline mode="alternate" style={{ margin: '0 20px' }}>
        {Education_details.map((education, index) => (
          <Timeline.Item
            key={index}
            dot={<FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '24px', color: '#FF6347' }} />}
            style={{ marginBottom: '40px' }} 
          >
            <div className="timeline-content text-left"> 
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{education.school_name}</h3>
              <span className="text-lg text-[#FF6347]">
                {education.year}, {education.grade}
              </span>
              <p className="text-sm" style={{ marginTop: '10px' }}>
                {education.description || "No additional details available."}
              </p>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </section>
  );
}
