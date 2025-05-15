import {
  AlertTriangle,
  FileText,
  ClipboardList,
  BookOpen,
  FileIcon,
  Heart,
  Shield,
  Globe,
  Calendar,
  AlertCircle,
  Thermometer,
  Users,
  BookOpenIcon,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function ProblemPage() {
  return (
    <main className="flex min-h-screen flex-col">
      
      {/* Header */}
      <section className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border-l-4 border-yellow-500 pl-4">
            <h1 className="text-4xl font-bold text-white">The Problem</h1>
            <p className="mt-2 text-xl text-gray-300">Defining the challenge and backing it with research</p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <AlertTriangle className="mr-2 h-6 w-6 text-yellow-500" />
              Problem Statement
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Fatigue that workers experience on the jobsite can increase the risk for costly accidents and mistakes.
              The US Department of Labor recorded an 18% increase in accidents or injuries during night shifts and an
              increased injury risk of almost 40% for 12 hour shifts.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-yellow-500" />
                Limits, Criteria & Assumptions
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Limits:</h4>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Focus on heart rate, SpO2, acceleration, orientation</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Relies on stable network for real-time data/alerts</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Durability tested under typical, not extreme, conditions</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Sensor accuracy based on specs, may vary</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Time limit of 1.5 weeks of building</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">Criteria:</h4>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Data latency &lt; 5 seconds</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Fall detection false positive rate &lt; 5%</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Wearable battery life &gt; 5 hours</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Dashboard accessible on standard web browsers</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Positive user feedback on comfort and usability</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Real-time emergency alerts</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">Assumptions:</h4>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Workers will consistently wear the device on jobsite</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Reliable network available at sites</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Supervisors will monitor dashboard and respond</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Biometric sensors provide reasonable accuracy</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>User interface is intuitive for all users</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-yellow-500" />
                History & Background
              </h3>
              <div className="mt-4 space-y-4 text-gray-700">
                <p>
                  Construction remains one of the most dangerous industries, with fatality rates consistently higher
                  than the national average for all industries. According to OSHA, construction accounts for 20% of
                  worker fatalities in private industry.
                </p>
                <p>
                  The "Fatal Four" leading causes of construction fatalities are falls, struck by object, electrocution,
                  and caught-in/between. Many of these accidents occur due to lack of awareness of worker physical
                  condition or environmental hazards.
                </p>
                <p>
                  Traditional safety equipment has focused on passive protection rather than active monitoring and
                  prevention. The integration of IoT and wearable technology presents an opportunity to revolutionize
                  construction safety.
                </p>
              </div>
            </div>
          </div>

          {/* Tabs for Survey Results and Research Articles */}
          <div className="mt-12">
            <Tabs defaultValue="survey" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="survey">Survey Results</TabsTrigger>
                <TabsTrigger value="research">Research Articles</TabsTrigger>
              </TabsList>

              {/* Survey Results Tab */}
              <TabsContent value="survey" className="mt-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Worker Survey</h3>

                  <div className="mt-6 space-y-12">
                    <div>
                      <div className="flex justify-center">
                        <div className="max-w-3xl w-full">
                          <Image
                            src="/images/survey-pie-chart.png"
                            alt="Pie chart showing 75% Yes and 25% No responses to whether monitoring health metrics could improve well-being and productivity"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-center">
                        <div className="max-w-3xl w-full">
                          <Image
                            src="/images/survey-bar-graph.png"
                            alt="Bar graph showing importance ratings for automatic alerts to first responders with location data"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Voice of the Customer */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <ClipboardList className="mr-2 h-5 w-5 text-yellow-500" />
                    Voice of the Customer
                  </h3>

                  <div className="mt-4 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Requested Features</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start bg-gray-50 p-3 rounded-md">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-500 text-white text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                              <Heart className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-gray-700">Foot pain levels monitoring</span>
                          </li>
                          <li className="flex items-start bg-gray-50 p-3 rounded-md">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-500 text-white text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                              <Shield className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-gray-700">Positive physical activity encouragement</span>
                          </li>
                          <li className="flex items-start bg-gray-50 p-3 rounded-md">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-500 text-white text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                              <Globe className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-gray-700">Spanish language support</span>
                          </li>
                          <li className="flex items-start bg-gray-50 p-3 rounded-md">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-500 text-white text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                              <Calendar className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-gray-700">Fitness and health quarterly check-ins</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Concerns & Suggestions</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start bg-gray-50 p-3 rounded-md">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-500 text-white text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                              <AlertCircle className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-gray-700">
                              Privacy: "I wouldn't want anyone tracking my data other than the individual worker"
                            </span>
                          </li>
                          <li className="flex items-start bg-gray-50 p-3 rounded-md">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-500 text-white text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                              <Thermometer className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-gray-700">Humidity and UV level detection</span>
                          </li>
                          <li className="flex items-start bg-gray-50 p-3 rounded-md">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-500 text-white text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                              <Users className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-gray-700">
                              "Connect to a supervisor to check on the workman, which would help eliminate false alarms"
                            </span>
                          </li>
                          <li className="flex items-start bg-gray-50 p-3 rounded-md">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-500 text-white text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                              <BookOpenIcon className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-gray-700">
                              "Training, knowledgeable supervision, and support from upper management is critical"
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Research Articles Tab */}
              <TabsContent value="research" className="mt-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900">Research Articles</h3>
                  <p className="text-gray-600 mt-1">Academic and industry research supporting our project</p>
                  <div className="mt-4 h-1 w-16 bg-yellow-500"></div>

                  <div className="mt-8 space-y-8">
                    <div className="flex">
                      <div className="flex-shrink-0 text-yellow-500 mr-4">
                        <FileIcon className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">AXA XL Fast Fast Forward (2023)</h4>
                        <p className="text-gray-600 italic">"Fighting Fatigue in the Construction Industry"</p>
                        <p className="mt-2 text-gray-700">
                          This article highlights the risks of worker fatigue in construction, noting that 100% of
                          surveyed workers had at least one fatigue risk factor. Fatigue impairs decision-making and
                          coordination, increasing accident risk. The National Safety Council estimates fatigue costs
                          the industry $1.8 million per year on average.
                        </p>
                        <a
                          href="https://axaxl.com/fast-fast-forward/articles/fighting-fatigue-in-the-construction-industry"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-yellow-600 hover:text-yellow-700"
                        >
                          Download Article (PDF)
                        </a>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 text-yellow-500 mr-4">
                        <FileIcon className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">Occupational Medicine (Oxford, England) (2015)</h4>
                        <p className="text-gray-600 italic">
                          "Influence of fatigue on construction workers' physical and cognitive function"
                        </p>
                        <p className="mt-2 text-gray-700">
                          This article explores the connection between fatigue and its effects on the physical and
                          mental capabilities of construction workers. The study, involving 606 construction workers
                          from the 2010–11 National Health Interview Survey, revealed that workers experiencing
                          tiredness were more prone to difficulties in both physical and cognitive tasks. Notably, 49%
                          reported feeling tired on some days, while 10% experienced tiredness most days or daily.
                        </p>
                        <a
                          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4377329/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-yellow-600 hover:text-yellow-700"
                        >
                          Download Article (PDF)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Product Specifications
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Size and Weight */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                </svg>
                Size & Weight
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>No larger than a shoebox (must be portable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Weight must not exceed 15 lbs (must be wearable)</span>
                </li>
              </ul>
            </div>

            {/* Materials */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 1 1 0 001.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                Materials
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Non-thermally conductive materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Non-electrically conductive materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Materials that maintain shape under stress/load</span>
                </li>
              </ul>
            </div>

            {/* Cost/Pricing */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.616 1.065 2.293 1.094V18a1 1 0 102 0v-.093c.677-.027 1.73-.445 2.293-1.094a1 1 0 10-1.51-1.31c-.163.186-.451.375-.841.503v-1.943a4.53 4.53 0 001.676-.662C13.398 9.766 14 8.99 14 8c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 5.092V4.999z" clipRule="evenodd" />
                </svg>
                Cost & Pricing
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Manufacturing cost must not exceed $250</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Selling price must not exceed $300 market average</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
