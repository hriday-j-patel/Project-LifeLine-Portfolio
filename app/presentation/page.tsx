import Link from "next/link"
import Image from "next/image"
import { FileText, Video, Paperclip, Mail, Slack, Plus, Minus } from "lucide-react"
import { StaggeredFadeIn } from "@/components/staggered-fadein"

export default function PresentationPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggeredFadeIn className="border-l-4 border-yellow-500 pl-4">
            <h1 className="text-4xl font-bold text-white">Presentation & Appendix</h1>
            <p className="mt-2 text-xl text-gray-300">Project documentation and supporting materials</p>
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Presentation Materials */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <StaggeredFadeIn className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <FileText className="mr-2 h-6 w-6 text-yellow-500" />
                Presentation Materials
              </h2>
            </div>

            <div className="mt-4">
              <StaggeredFadeIn>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Presentation Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="relative w-full">
                      <Image
                        src="/images/presentation-pic-1.jpg"
                        alt="Project Lifeline Presentation"
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-lg"
                        priority
                      />
                    </div>
                    <p className="text-sm text-center text-gray-500">Figure 1: Project Lifeline Demonstration</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="relative w-full">
                      <Image
                        src="/images/presentation-pic-2.jpg"
                        alt="Project Lifeline Demonstration"
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-lg"
                        priority
                      />
                    </div>
                    <p className="text-sm text-center text-gray-500">Figure 2: Project Lifeline Presentation</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-700">
                  These images showcase the Project Lifeline prototype in action, demonstrating how the product would fit 
                  on the consumer (left) and our presentation setup (right). 
                </p>
              </StaggeredFadeIn>
            </div>

            {/* Appendix */}
            <div className="mt-12">
              <StaggeredFadeIn>
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Paperclip className="mr-2 h-6 w-6 text-yellow-500" />
                  Appendix
                </h2>

                <div className="mt-8 space-y-8">
                  {/* Engineering Journal */}
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900">Engineering Journal</h3>
                    <div className="mt-4 space-y-6">
                      <StaggeredFadeIn className="space-y-6">
                        <div className="bg-white p-4 rounded border border-gray-300">
                          <h4 className="font-bold text-gray-800 text-base">Journal Entry: Market Research</h4>
                          <p className="text-sm text-gray-700 mt-1">Date: Feb 7, 2025</p>
                          <div className="mt-2 border border-gray-200 rounded-lg overflow-hidden">
                            <Image
                              src="/images/market-research-journal.png"
                              alt="Market Research Journal Entry"
                              width={800}
                              height={600}
                              className="w-full h-auto"
                            />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded border border-gray-300">
                          <h4 className="font-bold text-gray-800 text-base">
                            Journal Entry: Mock-Up Design Material Research
                          </h4>
                          <p className="text-sm text-gray-700 mt-1">Date: Mar 7, 2025</p>
                          <div className="mt-2 border border-gray-200 rounded-lg overflow-hidden">
                            <Image
                              src="/images/mockup-material-research.png"
                              alt="Mock-Up Design Material Research"
                              width={800}
                              height={600}
                              className="w-full h-auto"
                            />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded border border-gray-300">
                          <h4 className="font-bold text-gray-800 text-base">Journal Entry: Checkpoint 1 Feedback</h4>
                          <p className="text-sm text-gray-700 mt-1">Date: Mar 20, 2025</p>
                          <div className="mt-4">
                            <div className="overflow-hidden border border-gray-200 rounded-lg">
                              <table className="min-w-full border-collapse">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="w-1/2 p-4 text-left border-b border-r border-gray-200">
                                      <div className="flex items-center">
                                        <div className="bg-green-100 p-2 rounded-full mr-3">
                                          <Plus className="h-5 w-5 text-green-600" />
                                        </div>
                                        <span className="text-base font-bold text-gray-800">Strengths</span>
                                      </div>
                                    </th>
                                    <th className="w-1/2 p-4 text-left border-b border-gray-200">
                                      <div className="flex items-center">
                                        <div className="bg-yellow-100 p-2 rounded-full mr-3">
                                          <Minus className="h-5 w-5 text-yellow-600" />
                                        </div>
                                        <span className="text-base font-bold text-gray-800">Areas for Improvement</span>
                                      </div>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="align-top p-4 border-r border-gray-200">
                                      <ul className="text-sm text-gray-700 space-y-3">
                                        <li className="flex items-start">
                                          <span className="text-green-500 mr-2">•</span>
                                          <span>Great problem to solve, covered all health components/sensors</span>
                                        </li>
                                        <li className="flex items-start">
                                          <span className="text-green-500 mr-2">•</span>
                                          <span>Nice powerpoint presentation, presenting skills</span>
                                        </li>
                                        <li className="flex items-start">
                                          <span className="text-green-500 mr-2">•</span>
                                          <span>Good concept display, good descriptions</span>
                                        </li>
                                        <li className="flex items-start">
                                          <span className="text-green-500 mr-2">•</span>
                                          <span>Good idea solved a very important problem love the usability</span>
                                        </li>
                                        <li className="flex items-start">
                                          <span className="text-green-500 mr-2">•</span>
                                          <span>Good 3D model</span>
                                        </li>
                                        <li className="flex items-start">
                                          <span className="text-green-500 mr-2">•</span>
                                          <span>Good looking design</span>
                                        </li>
                                        <li className="flex items-start">
                                          <span className="text-green-500 mr-2">•</span>
                                          <span>Accounts for lots of working scenarios</span>
                                        </li>
                                        <li className="flex items-start">
                                          <span className="text-green-500 mr-2">•</span>
                                          <span>Good idea, heatstroke in the summer can be bad</span>
                                        </li>
                                        <li className="flex items-start">
                                          <span className="text-green-500 mr-2">•</span>
                                          <span>Very detailed + professional presentation</span>
                                        </li>
                                      </ul>
                                    </td>
                                    <td className="align-top p-4">
                                      <ul className="text-sm text-gray-700 space-y-3">
                                        <li className="flex items-start">
                                          <span className="text-yellow-500 mr-2">•</span>
                                          <span>Strapping around the body might be uncomfortable if on bare skin</span>
                                        </li>
                                        <li className="flex items-start">
                                          <span className="text-yellow-500 mr-2">•</span>
                                          <span>Small font for textboxes</span>
                                        </li>
                                        <li className="flex items-start">
                                          <span className="text-yellow-500 mr-2">•</span>
                                          <span>Could the fans be annoying?</span>
                                        </li>
                                        <li className="flex items-start">
                                          <span className="text-yellow-500 mr-2">•</span>
                                          <span>Expensive</span>
                                        </li>
                                        <li className="flex items-start">
                                          <span className="text-yellow-500 mr-2">•</span>
                                          <span>Could cost a lot</span>
                                        </li>
                                        <li className="flex items-start">
                                          <span className="text-yellow-500 mr-2">•</span>
                                          <span>Could potentially get in the way while working</span>
                                        </li>
                                        <li className="flex items-start">
                                          <span className="text-yellow-500 mr-2">•</span>
                                          <span>Don't overwork yourself with the coding</span>
                                        </li>
                                      </ul>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="mt-6">
                              <h4 className="font-bold text-gray-800 text-base mb-3">Additional Feedback:</h4>
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h5 className="font-semibold text-green-700 mb-2">Strengths:</h5>
                                  <ul className="text-sm text-gray-700 space-y-3">
                                    <li className="flex items-start">
                                      <span className="text-green-500 mr-2">•</span>
                                      <span>Great problem to solve, covered all health components/sensors</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-green-500 mr-2">•</span>
                                      <span>Nice powerpoint presentation, presenting skills</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-green-500 mr-2">•</span>
                                      <span>Good concept display, good descriptions</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-green-500 mr-2">•</span>
                                      <span>Good idea solved a very important problem love the usability</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-green-500 mr-2">•</span>
                                      <span>Good 3D model</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-green-500 mr-2">•</span>
                                      <span>Good looking design</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-green-500 mr-2">•</span>
                                      <span>Accounts for lots of working scenarios</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-green-500 mr-2">•</span>
                                      <span>Good idea, heatstroke in the summer can be bad</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-green-500 mr-2">•</span>
                                      <span>Very detailed + professional presentation</span>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-yellow-700 mb-2">Areas for Improvement:</h5>
                                  <ul className="text-sm text-gray-700 space-y-3">
                                    <li className="flex items-start">
                                      <span className="text-yellow-500 mr-2">•</span>
                                      <span>Strapping around the body might be uncomfortable if on bare skin</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-yellow-500 mr-2">•</span>
                                      <span>Small font for textboxes</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-yellow-500 mr-2">•</span>
                                      <span>Could the fans be annoying?</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-yellow-500 mr-2">•</span>
                                      <span>Expensive</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-yellow-500 mr-2">•</span>
                                      <span>Could cost a lot</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-yellow-500 mr-2">•</span>
                                      <span>Could potentially get in the way while working</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-yellow-500 mr-2">•</span>
                                      <span>Don't overwork yourself with the coding</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </StaggeredFadeIn>
                    </div>
                  </div>
                </div>
              </StaggeredFadeIn>
            </div>

            {/* Correspondence Logs */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <StaggeredFadeIn>
                <h3 className="text-xl font-bold text-gray-900">Correspondence Logs</h3>
                <div className="mt-4 space-y-6">
                  {/* Email to Dean */}
                  <div className="bg-white p-4 rounded border border-gray-300">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-base">Mentor Request Email</h4>
                        <p className="text-sm text-gray-500">To: Dean Pfaendtner, NCSU College of Engineering</p>
                        <p className="text-sm text-gray-500">Date: Feb 4, 2025</p>
                        <div className="mt-3 text-sm text-gray-700 space-y-3 bg-gray-50 p-4 rounded-lg">
                          <p>Dear Dean Pfaendtner,</p>

                          <p>
                            I hope this message finds you well. My name is Isaac Dupree, and I am a senior at Apex
                            Friendship High School (AFHS). At AFHS, I am enrolled in a pre-engineering program designed
                            to help students like me excel in math, science, and engineering fields. For our final
                            project, my partner Hriday Patel and I are tasked with identifying, justifying, designing,
                            and testing a unique research project. The project will be presented to our classmates,
                            teachers, parents, and local professionals.
                          </p>

                          <p>
                            For our project, we have decided to tackle the issue of worker fatigue in industrial
                            environments. Studies indicate that 43% of American workers report being frequently too
                            tired to function safely at work (Illinois Department of Labor, 2019). Additionally, the
                            Occupational Safety and Health Administration states that working 12-hour days increases the
                            risk of injury by 37%. Given the prevalence of industrial work, we believe addressing this
                            issue is both timely and critical.
                          </p>

                          <p>
                            As part of the project, we are required to find a mentor who can provide guidance throughout
                            the process. After researching local experts in this field, we came across your name on the
                            NCSU website. Since I have recently been accepted into NCSU's engineering program, I am
                            familiar with the caliber of the institution, and I greatly respect your leadership as Dean
                            of the College of Engineering. We would be incredibly grateful if you could recommend a
                            mentor who could support us throughout this project.
                          </p>

                          <p>
                            The only requirements for our mentor are that they be at least 21 years of age and willing
                            to meet with us periodically as we progress. We would deeply appreciate any guidance you can
                            offer.
                          </p>

                          <p>Thank you for your time and consideration. We look forward to hearing from you.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Proposal Slack Msg */}
                  <div className="bg-white p-4 rounded border border-gray-300">
                    <div className="flex items-start">
                      <Slack className="h-5 w-5 text-[#4A154B] mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-base">Mentor Response</h4>
                        <p className="text-sm text-gray-500">From: James Stone</p>
                        <p className="text-sm text-gray-500">Date: Feb 21, 2025</p>
                        <div className="mt-2 border border-gray-200 rounded-lg overflow-hidden">
                          <Image
                            src="/images/slack-message.png"
                            alt="Slack message from mentor"
                            width={800}
                            height={400}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggeredFadeIn>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <StaggeredFadeIn>
                <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
                <div className="mt-4">
                  <div>
                    <h4 className="font-bold text-gray-800 text-base">Industry Mentor</h4>
                    <p className="text-base text-gray-700">James Stone</p>
                    <p className="text-base text-gray-700">Industrial Engineer</p>
                    <p className="text-base text-gray-700">
                      <Mail className="inline-block h-4 w-4 mr-1" />
                      james@ohsnap.com
                    </p>
                  </div>
                </div>
              </StaggeredFadeIn>
            </div>
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <StaggeredFadeIn>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              <p className="mt-2 text-gray-600">
                Interested in learning more about Project Lifeline? Get in touch with our team.
              </p>
            </div>

            <form className="mt-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </StaggeredFadeIn>
        </div>
      </section>
    </main>
  )
}
