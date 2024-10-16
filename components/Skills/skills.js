import Link from "next/link";
import Image from "next/image";
import skillsData from "./skills-data.js";

export default function Skills() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 border border-gray-600 rounded-lg transition-transform duration-300 transform hover:scale-105`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center mb-2">
              <span className=" mr-3">{skill.icon}</span>
              <h3 className="text-lg font-semibold">
                <span className=" transition-colors">
                  {skill.name}
                </span>
              </h3>
            </div>
            <p className="">{skill.description}</p>
          </div>
        ))}
      </section>

      {/* Coding Profiles Section */}
      <div className="mt-12">
        <h2 className="text-2xl  mb-6">Coding Profiles</h2>
        <div className="flex flex-wrap gap-6 items-center">
          <Link
            href="https://leetcode.com/u/rahul_rm__/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-600  px-4 py-2 rounded-lg  transition-colors"
          >
            <Image
              src="/images/leetcode.svg"
              alt="LeetCode"
              height={30}
              width={30}
              className="mr-2"
            />
            <span>LeetCode</span>
          </Link>

          <Link
            href="https://www.geeksforgeeks.org/user/rahulmamoria/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-600  px-4 py-2 rounded-lg  transition-colors"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
              alt="GeeksforGeeks"
              height={30}
              width={30}
              className="mr-2"
            />
            <span>GeeksforGeeks</span>
          </Link>

          <Link
            href="https://www.codechef.com/users/rahulrm_903"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-600  px-4 py-2 rounded-lg  transition-colors"
          >
            <Image
              src="/images/codechef.png"
              alt="CodeChef"
              height={30}
              width={30}
              className="mr-2"
            />
            <span>CodeChef</span>
          </Link>

          <Link
            href="https://codeforces.com/profile/rahul_rm__"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-600  px-4 py-2 rounded-lg  transition-colors"
          >
            <Image
              src="https://art.npanuhin.me/SVG/Codeforces/Codeforces.colored.svg"
              alt="Codeforces"
              height={30}
              width={30}
              className="mr-2"
            />
            <span>Codeforces</span>
          </Link>
        </div>
      </div>
    </>
  );
}
