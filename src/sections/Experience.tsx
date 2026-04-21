import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { workExperiences } from "../constants/index.js";
import CanvasLoader from "../components/CanvasLoader.js";
import Developer from "../components/Developer.js";

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState("idle");
  const [expandedRoles, setExpandedRoles] = useState<Record<number, string>>(() => {
    return workExperiences.reduce<Record<number, string>>((value, company) => {
      const firstRole = company.roles[0];

      if (!firstRole) return value;

      value[company.id] = `${company.id}-${firstRole.id}`;
      return value;
    }, {});
  });

  const handleRoleToggle = (
    companyId: number,
    roleKey: string,
    animation: string,
  ) => {
    setAnimationName(animation.toLowerCase());
    setExpandedRoles((currentValue) => ({
      ...currentValue,
      [companyId]: currentValue[companyId] === roleKey ? "" : roleKey,
    }));
  };

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5 space-y-6">
              {workExperiences.map((company) => (
                <div key={company.id} className="linkedin-experience-card">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="linkedin-company-logo">
                      <img
                        className="w-full h-full object-contain"
                        src={company.icon}
                        alt={`${company.company} logo`}
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xl sm:text-2xl font-semibold text-white">
                        {company.company}
                      </p>
                      <p className="text-slate-300 text-sm sm:text-base">
                        {company.totalDuration}
                      </p>
                      <p className="text-slate-400 text-sm sm:text-base">
                        {company.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 sm:mt-10">
                    {company.roles.map((role, index) => {
                      const isLastRole = index === company.roles.length - 1;
                      const roleKey = `${company.id}-${role.id}`;
                      const isRoleExpanded = expandedRoles[company.id] === roleKey;

                      return (
                        <div
                          key={role.id}
                          onPointerOver={() =>
                            setAnimationName(role.animation.toLowerCase())
                          }
                          onPointerOut={() => setAnimationName("idle")}
                          className="linkedin-role group"
                        >
                          <div className="linkedin-role_timeline">
                            <span className="linkedin-role_dot" />
                            {!isLastRole && (
                              <span className="linkedin-role_line" />
                            )}
                          </div>

                          <div className="linkedin-role_content">
                            <div className="flex items-start justify-between gap-3">
                              <div
                                className="cursor-pointer"
                                onClick={() =>
                                  handleRoleToggle(
                                    company.id,
                                    roleKey,
                                    role.animation,
                                  )
                                }
                              >
                                <p className="text-lg sm:text-xl font-semibold text-white">
                                  {role.title}
                                </p>
                                <p className="text-slate-300 text-sm mt-1">
                                  {role.employmentType}
                                </p>
                                <p className="text-slate-400 text-sm mt-1">
                                  {role.duration} · {role.tenure}
                                </p>
                                <p className="text-slate-400 text-sm mt-1">
                                  {role.workMode}
                                </p>
                              </div>

                              <button
                                type="button"
                                className="text-slate-300 text-xl leading-none mt-1 cursor-pointer"
                                onClick={() =>
                                  handleRoleToggle(
                                    company.id,
                                    roleKey,
                                    role.animation,
                                  )
                                }
                                aria-label={
                                  isRoleExpanded
                                    ? `Collapse ${role.title}`
                                    : `Expand ${role.title}`
                                }
                              >
                                {isRoleExpanded ? "−" : "+"}
                              </button>
                            </div>

                            <div
                              className={isRoleExpanded ? "block" : "hidden"}
                            >
                              <p className="text-slate-300 mt-4 font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                                {role.summary}
                              </p>

                              <div className="linkedin-highlights-scroll mt-4">
                                <ul className="space-y-2.5 text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
                                  {role.highlights.map((highlight) => (
                                    <li
                                      key={highlight}
                                      className="flex items-start gap-3 leading-relaxed"
                                    >
                                      <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-[#3b82f6] shrink-0" />
                                      <span>{highlight}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
