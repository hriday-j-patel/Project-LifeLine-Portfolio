import { Lightbulb, CheckCircle, BarChart3, Search } from "lucide-react"
import Image from "next/image"

export default function SolutionPage() {
  return (
    <main className="flex min-h-screen flex-col">

      {/* Header */}
      <section className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border-l-4 border-yellow-500 pl-4">
            <h1 className="text-4xl font-bold text-white">The Solution</h1>
            <p className="mt-2 text-xl text-gray-300">Our innovative approach to construction safety</p>
          </div>
        </div>
      </section>

      {/* Brainstorming & Ideation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Lightbulb className="mr-2 h-6 w-6 text-yellow-500" />
            Brainstorming & Ideation
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700">
                Our team explored multiple approaches to address construction safety challenges. We began with a
                comprehensive brainstorming session to identify potential solutions that could monitor worker health and
                environmental conditions in real-time.
              </p>

              <div className="mt-6 space-y-4">
                <h3 className="font-bold text-gray-800">Initial Concepts:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-gray-200 text-gray-700 text-xs font-bold mr-2 mt-0.5">
                      1
                    </span>
                    <span>Clip On Noise Cancellation Device</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-gray-200 text-gray-700 text-xs font-bold mr-2 mt-0.5">
                      2
                    </span>
                    <span>Wearable Smart Timer Device</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-gray-200 text-gray-700 text-xs font-bold mr-2 mt-0.5">
                      3
                    </span>
                    <span>Wearable Nutrition Monitor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-yellow-500 text-white text-xs font-bold mr-2 mt-0.5">
                      4
                    </span>
                    <span>Clip On Wearable Sensor</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-bold text-gray-800">Brainstorming Mind Map</h3>
              <div className="mt-4 relative bg-white border border-gray-300 rounded-lg overflow-hidden">
                <Image
                  src="/images/brainstorming-mind-map.png"
                  alt="Brainstorming mind map showing different approaches to solving worker fatigue"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Concept Development */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900">Concept Development</h3>

            <div className="mt-6 grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-gray-800">Clip On Noise Cancellation Device</h4>
                <p className="mt-2 text-gray-700">
                  A compact, wearable device that clips onto safety vests to reduce ambient noise in loud construction
                  environments. Features active noise cancellation, rechargeable battery, and durable construction.
                </p>
                <div className="mt-4">
                  <h5 className="text-base font-bold text-gray-700">Key Benefits:</h5>
                  <ul className="mt-2 space-y-2 text-base text-gray-600">
                    <li>• Lightweight and non-invasive compared to bulky earmuffs</li>
                    <li>• Long battery life for full work shifts</li>
                    <li>• Universal compatibility with various PPE equipment</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-gray-800">Wearable Smart Timer Device</h4>
                <p className="mt-2 text-gray-700">
                  An attachable device that helps construction workers manage break schedules to prevent fatigue.
                  Automatically tracks work duration and alerts users when it's time to take a break via vibrations,
                  sounds, and LED indicators.
                </p>
                <div className="mt-4">
                  <h5 className="text-base font-bold text-gray-700">Key Benefits:</h5>
                  <ul className="mt-2 space-y-2 text-base text-gray-600">
                    <li>• Rugged design for high-movement, outdoor environments</li>
                    <li>• Hands-free operation with vibration and LED alerts</li>
                    <li>• Emergency alert button for immediate rest requests</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-gray-800">Wearable Nutrition Monitor</h4>
                <p className="mt-2 text-gray-700">
                  A small, lightweight device that monitors nutrition metrics without interfering with daily activities.
                  Features modular sensors to track different nutrition metrics and connects to a software platform for
                  monitoring.
                </p>
                <div className="mt-4">
                  <h5 className="text-base font-bold text-gray-700">Key Benefits:</h5>
                  <ul className="mt-2 space-y-2 text-base text-gray-600">
                    <li>• Small size makes it suitable for industrial environments</li>
                    <li>• Simple to use and interact with</li>
                    <li>• Can predict fatigue before accidents occur</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-gray-800">Clip On Wearable Sensor</h4>
                <p className="mt-2 text-gray-700">
                  A compact health monitoring device that tracks general health metrics including muscle response, sweat
                  levels, and heart rate. Features modular sensors and connects to a software platform for real-time
                  monitoring.
                </p>
                <div className="mt-4">
                  <h5 className="text-base font-bold text-gray-700">Key Benefits:</h5>
                  <ul className="mt-2 space-y-2 text-base text-gray-600">
                    <li>• Accurately tracks health metrics for fatigue prevention</li>
                    <li>• Ease of use in industrial environments</li>
                    <li>• Provides early warnings before accidents occur</li>
                    <li>• More precise than nutrition-based monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Decision Matrix */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <BarChart3 className="mr-2 h-5 w-5 text-yellow-500" />
              Decision Matrix
            </h3>

            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300 border text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-3 py-2 text-left font-semibold text-gray-900">Criteria</th>
                    <th className="px-3 py-2 text-center font-semibold text-gray-900">Weight</th>
                    <th className="px-3 py-2 text-center font-semibold text-gray-900">Noise Cancelling</th>
                    <th className="px-3 py-2 text-center font-semibold text-gray-900">Smart Timer</th>
                    <th className="px-3 py-2 text-center font-semibold text-gray-900">Nutrition Monitor</th>
                    <th className="px-3 py-2 text-center font-semibold text-gray-900 bg-yellow-100">Wearable Sensor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 py-2 text-gray-900">Effectiveness</td>
                    <td className="px-3 py-2 text-center text-gray-900">20%</td>
                    <td className="px-3 py-2 text-center text-gray-900">3 (0.6)</td>
                    <td className="px-3 py-2 text-center text-gray-900">2 (0.4)</td>
                    <td className="px-3 py-2 text-center text-gray-900">4 (0.8)</td>
                    <td className="px-3 py-2 text-center text-gray-900 bg-yellow-50 font-medium">4 (2.4)</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-gray-900">Ease of Use</td>
                    <td className="px-3 py-2 text-center text-gray-900">15%</td>
                    <td className="px-3 py-2 text-center text-gray-900">4 (0.6)</td>
                    <td className="px-3 py-2 text-center text-gray-900">5 (0.75)</td>
                    <td className="px-3 py-2 text-center text-gray-900">3 (0.45)</td>
                    <td className="px-3 py-2 text-center text-gray-900 bg-yellow-50 font-medium">3 (1.8)</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-gray-900">Durability</td>
                    <td className="px-3 py-2 text-center text-gray-900">10%</td>
                    <td className="px-3 py-2 text-center text-gray-900">4 (0.4)</td>
                    <td className="px-3 py-2 text-center text-gray-900">3 (0.3)</td>
                    <td className="px-3 py-2 text-center text-gray-900">4 (0.4)</td>
                    <td className="px-3 py-2 text-center text-gray-900 bg-yellow-50 font-medium">3 (1.2)</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-gray-900">Comfort</td>
                    <td className="px-3 py-2 text-center text-gray-900">15%</td>
                    <td className="px-3 py-2 text-center text-gray-900">4 (0.6)</td>
                    <td className="px-3 py-2 text-center text-gray-900">4 (0.6)</td>
                    <td className="px-3 py-2 text-center text-gray-900">4 (0.6)</td>
                    <td className="px-3 py-2 text-center text-gray-900 bg-yellow-50 font-medium">3 (1.8)</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-gray-900">Time Feasibility</td>
                    <td className="px-3 py-2 text-center text-gray-900">10%</td>
                    <td className="px-3 py-2 text-center text-gray-900">3 (0.3)</td>
                    <td className="px-3 py-2 text-center text-gray-900">3 (0.3)</td>
                    <td className="px-3 py-2 text-center text-gray-900">3 (0.3)</td>
                    <td className="px-3 py-2 text-center text-gray-900 bg-yellow-50 font-medium">2 (0.6)</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-gray-900">Scalability</td>
                    <td className="px-3 py-2 text-center text-gray-900">5%</td>
                    <td className="px-3 py-2 text-center text-gray-900">3 (0.15)</td>
                    <td className="px-3 py-2 text-center text-gray-900">3 (0.15)</td>
                    <td className="px-3 py-2 text-center text-gray-900">3 (0.15)</td>
                    <td className="px-3 py-2 text-center text-gray-900 bg-yellow-50 font-medium">3 (0.45)</td>
                  </tr>
                  <tr className="bg-gray-100 font-bold">
                    <td className="px-3 py-2 text-gray-900">TOTAL</td>
                    <td className="px-3 py-2 text-center text-gray-900"></td>
                    <td className="px-3 py-2 text-center text-gray-900">2.65</td>
                    <td className="px-3 py-2 text-center text-gray-900">2.50</td>
                    <td className="px-3 py-2 text-center text-gray-900">2.70</td>
                    <td className="px-3 py-2 text-center text-gray-900 bg-yellow-50">8.25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Existing Solutions */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <Search className="mr-2 h-5 w-5 text-yellow-500" />
              Current & Past Solutions
            </h3>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 aspect-square relative bg-transparent flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/apple-watch.png"
                      alt="Apple Watch"
                      width={200}
                      height={200}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <div className="col-span-2 p-4">
                    <h4 className="font-bold text-lg">Apple Watch</h4>
                    <p className="text-base text-gray-600 mt-1">
                      Versatile smartwatch with health and fitness features.
                    </p>
                    <div className="mt-3">
                      <h5 className="text-sm font-semibold text-gray-700">Limitations:</h5>
                      <div className="flex flex-wrap mt-1">
                        <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded m-1">
                          Not durable
                        </span>
                        <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded m-1">
                          Consumer-focused
                        </span>
                        <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded m-1">
                          Limited battery
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 aspect-square relative bg-transparent flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/fitbit-sense.jpeg"
                      alt="Fitbit Sense"
                      width={200}
                      height={200}
                      className="object-contain max-h-full max-w-full scale-125"
                    />
                  </div>
                  <div className="col-span-2 p-4">
                    <h4 className="font-bold text-lg">Fitbit Sense</h4>
                    <p className="text-base text-gray-600 mt-1">Health and wellness smartwatch with various sensors.</p>
                    <div className="mt-3">
                      <h5 className="text-sm font-semibold text-gray-700">Limitations:</h5>
                      <div className="flex flex-wrap mt-1">
                        <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded m-1">
                          Fragile
                        </span>
                        <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded m-1">
                          No fall detection
                        </span>
                        <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded m-1">
                          No alerts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 aspect-square relative bg-transparent flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/whoop-strap.jpeg"
                      alt="Whoop Strap"
                      width={200}
                      height={200}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <div className="col-span-2 p-4">
                    <h4 className="font-bold text-lg">Whoop Strap</h4>
                    <p className="text-base text-gray-600 mt-1">
                      Screenless wearable focused on athletic recovery and strain.
                    </p>
                    <div className="mt-3">
                      <h5 className="text-sm font-semibold text-gray-700">Limitations:</h5>
                      <div className="flex flex-wrap mt-1">
                        <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded m-1">
                          No safety alerts
                        </span>
                        <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded m-1">
                          No GPS
                        </span>
                        <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded m-1">
                          Not industrial
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 aspect-square relative bg-transparent flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/garmin-instinct.webp"
                      alt="Garmin Instinct Solar"
                      width={200}
                      height={200}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <div className="col-span-2 p-4">
                    <h4 className="font-bold text-lg">Garmin Instinct Solar</h4>
                    <p className="text-base text-gray-600 mt-1">
                      Rugged outdoor smartwatch with solar charging and ABC sensors.
                    </p>
                    <div className="mt-3">
                      <h5 className="text-sm font-semibold text-gray-700">Limitations:</h5>
                      <div className="flex flex-wrap mt-1">
                        <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded m-1">
                          Limited health tracking
                        </span>
                        <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded m-1">
                          Not for construction
                        </span>
                        <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded m-1">
                          No dashboard
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Solution */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-yellow-500" />
              Final Solution: Project Lifeline
            </h3>

            <div className="mt-6 grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <h4 className="p-3 bg-yellow-100 font-bold text-gray-800">Concept Drawing 1: External Design</h4>
                    <div className="p-4">
                      <Image
                        src="/images/concept-drawing-1.png"
                        alt="External design showing detachable lid, elastic band strap slot, and USB-C/3.5mm jack mounts"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <h4 className="p-3 bg-yellow-100 font-bold text-gray-800">Concept Drawing 2: Internal Layout</h4>
                    <div className="p-4">
                      <Image
                        src="/images/concept-drawing-2.png"
                        alt="Internal layout showing buck converters and Raspberry Pi placement"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <h4 className="p-3 bg-yellow-100 font-bold text-gray-800">
                      Concept Drawing 3: Component Placement
                    </h4>
                    <div className="p-4">
                      <Image
                        src="/images/concept-drawing-3.png"
                        alt="Component placement showing battery, GPS module, accelerometer/gyroscope, and 12V brushless fans"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-bold text-gray-900">Project Lifeline: Clip-On Wearable Sensor</h4>

                <p className="text-base text-gray-700">
                  After thorough analysis and testing, we developed Project Lifeline - a clip-on wearable sensor
                  specifically designed for construction environments that combines biometric monitoring with
                  environmental hazard detection.
                </p>

                <div>
                  <h5 className="text-lg font-bold text-gray-800">Key Features:</h5>
                  <ul className="mt-3 space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700">
                        Real-time heart rate and body temperature monitoring
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700">
                        Environmental sensors for temperature, humidity, and air quality
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700">
                        Haptic and visual alert system for dangerous conditions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700">
                        IP68 water and dust resistance with reinforced casing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700">
                        12+ hour battery life with fast charging capability
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700">Central monitoring dashboard for site managers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700">Emergency SOS button with location tracking</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-bold text-gray-800">Advantages Over Existing Solutions:</h5>
                  <ul className="mt-3 space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700">
                        Combines personal health monitoring with environmental awareness
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700">
                        Specifically designed for construction durability requirements
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700">
                        Proactive alert system rather than passive protection
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
