import { Wrench, FileSpreadsheet, BarChart3, ClipboardCheck } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import ImageZoom from "@/components/image-zoom"

export default function BuildTestPage() {
  return (
    <main className="flex min-h-screen flex-col">

      {/* Header */}
      <section className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border-l-4 border-yellow-500 pl-4">
            <h1 className="text-4xl font-bold text-white">Build & Test</h1>
            <p className="mt-2 text-xl text-gray-300">Engineering, construction, and data validation</p>
          </div>
        </div>
      </section>

      {/* Prototype Planning & Construction */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Wrench className="mr-2 h-6 w-6 text-yellow-500" />
            Prototype Planning & Construction
          </h2>

          {/* Main Tabs */}
          <div className="mt-8">
            <Tabs defaultValue="drawings" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="drawings">Engineering Drawings</TabsTrigger>
                <TabsTrigger value="materials">Materials & Components</TabsTrigger>
                <TabsTrigger value="testing">Testing & Evaluation</TabsTrigger>
              </TabsList>

              {/* Engineering Drawings Tab */}
              <TabsContent value="drawings" className="mt-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900">Orthographic Drawings</h3>

                  <div className="mt-6 space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Bottom Piece Orthographic Drawing</h4>
                      <div className="mt-4 flex justify-center">
                        <div className="max-w-3xl">
                          <Image
                            src="/images/orthographic-drawing.png"
                            alt="Orthographic drawing showing multiple views of the main enclosure with detailed dimensions"
                            width={800}
                            height={600}
                            className="w-full h-auto border border-gray-300 rounded-lg"
                          />
                        </div>
                      </div>
                      <p className="mt-2 text-center text-gray-600 italic">Lower Box Unit</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Modular Component Orthographic Drawing</h4>
                      <div className="mt-4 flex justify-center">
                        <div className="max-w-3xl">
                          <Image
                            src="/images/modular-orthographic.png"
                            alt="Orthographic drawing showing the modular component with detailed dimensions"
                            width={800}
                            height={600}
                            className="w-full h-auto border border-gray-300 rounded-lg"
                          />
                        </div>
                      </div>
                      <p className="mt-2 text-center text-gray-600 italic">Upper Box Unit</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Component Drawings</h4>
                      <div className="mt-4 grid md:grid-cols-2 gap-6">
                        <div>
                          <Image
                            src="/images/lid-drawing.png"
                            alt="Detailed drawing of the lid/top cover with dimensions"
                            width={500}
                            height={400}
                            className="w-full h-auto border border-gray-300 rounded-lg"
                          />
                          <p className="mt-2 text-center text-gray-600 italic">Top Plate Unit</p>
                        </div>

                        <div>
                          <Image
                            src="/images/side-panel-drawing.png"
                            alt="Detailed drawing of the side panel with dimensions"
                            width={500}
                            height={400}
                            className="w-full h-auto border border-gray-300 rounded-lg"
                          />
                          <p className="mt-2 text-center text-gray-600 italic">Battery Lid Unit</p>
                        </div>

                        <div>
                          <Image
                            src="/images/front-panel-drawing.png"
                            alt="Detailed drawing of the front panel with ventilation slots"
                            width={500}
                            height={400}
                            className="w-full h-auto border border-gray-300 rounded-lg"
                          />
                          <p className="mt-2 text-center text-gray-600 italic">Battery Box Unit</p>
                        </div>

                        <div>
                          <Image
                            src="/images/fan-grill-drawing.png"
                            alt="Detailed drawing of the fan grill/filter cover"
                            width={500}
                            height={400}
                            className="w-full h-auto border border-gray-300 rounded-lg"
                          />
                          <p className="mt-2 text-center text-gray-600 italic">Fan Guard Unit</p>
                        </div>

                        <div>
                          <Image
                            src="/images/panel-drawing-1.png"
                            alt="Detailed drawing of additional panel component"
                            width={500}
                            height={400}
                            className="w-full h-auto border border-gray-300 rounded-lg"
                          />
                          <p className="mt-2 text-center text-gray-600 italic">Back Plate Unit</p>
                        </div>

                        <div>
                          <Image
                            src="/images/panel-drawing-2.png"
                            alt="Detailed drawing of additional panel component"
                            width={500}
                            height={400}
                            className="w-full h-auto border border-gray-300 rounded-lg"
                          />
                          <p className="mt-2 text-center text-gray-600 italic">Front Plate Unit</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">System Architecture</h4>
                      <div className="mt-4 aspect-[16/9] relative bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center">
                        <Wrench className="h-12 w-12 text-gray-400" />
                        <p className="absolute text-sm font-medium">System Flowchart Placeholder</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Final Assembly</h4>
                        <div className="mt-4 flex justify-center">
                          <div className="max-w-xl">
                            <Image
                              src="/images/final-assembly.png"
                              alt="3D rendering of the fully assembled device"
                              width={500}
                              height={400}
                              className="w-full h-auto border border-gray-300 rounded-lg"
                            />
                          </div>
                        </div>
                        <p className="mt-2 text-center text-gray-600 italic">CAD Rendering of LifeLine Device</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Exploded View</h4>
                        <div className="mt-4 flex justify-center">
                          <div className="max-w-xl">
                            <Image
                              src="/images/exploded-view.png"
                              alt="Exploded view showing all components of the device"
                              width={500}
                              height={400}
                              className="w-full h-auto border border-gray-300 rounded-lg"
                            />
                          </div>
                        </div>
                        <p className="mt-2 text-center text-gray-600 italic">
                          Exploded view showing all components of the device
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Materials & Components Tab */}
              <TabsContent value="materials" className="mt-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900">Materials & Components</h3>
                  <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-300 border">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Item</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">QTY</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Description</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Vendor</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Cost</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-900">Accelerometer/Gyroscope</td>
                          <td className="px-4 py-2 text-sm text-gray-900">1</td>
                          <td className="px-4 py-2 text-sm text-gray-900">
                            Arduino Pro Board equipped with a package of sensors (microphone, 6-axis motion sensor,
                            magnetometer)
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                          <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-900">Raspberry Pi 5</td>
                          <td className="px-4 py-2 text-sm text-gray-900">1</td>
                          <td className="px-4 py-2 text-sm text-gray-900">
                            Control of our IoT sensors. 8 GB of RAM, 5V/5A DC Power
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                          <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-900">Wires</td>
                          <td className="px-4 py-2 text-sm text-gray-900">1</td>
                          <td className="px-4 py-2 text-sm text-gray-900">For misc cases (e.g. power)</td>
                          <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                          <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-900">Jumper Wires</td>
                          <td className="px-4 py-2 text-sm text-gray-900">1</td>
                          <td className="px-4 py-2 text-sm text-gray-900">Connection between breadboard and sensors</td>
                          <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                          <td className="px-4 py-2 text-sm text-gray-900">N/A</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-900">Brushless fans</td>
                          <td className="px-4 py-2 text-sm text-gray-900">1</td>
                          <td className="px-4 py-2 text-sm text-gray-900">LifeLine device cooling</td>
                          <td className="px-4 py-2 text-sm text-gray-900">Amazon</td>
                          <td className="px-4 py-2 text-sm text-gray-900">$6.99</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-900">Raspberry Pi Active Cooler</td>
                          <td className="px-4 py-2 text-sm text-gray-900">1</td>
                          <td className="px-4 py-2 text-sm text-gray-900">Cooling of Raspberry Pi 5</td>
                          <td className="px-4 py-2 text-sm text-gray-900">Amazon</td>
                          <td className="px-4 py-2 text-sm text-gray-900">$11.99</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-900">GPS Module</td>
                          <td className="px-4 py-2 text-sm text-gray-900">1</td>
                          <td className="px-4 py-2 text-sm text-gray-900">
                            Allows emergency responders to reach worker quickly in emergency situations
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900">Amazon</td>
                          <td className="px-4 py-2 text-sm text-gray-900">$10.99</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-900">Heart rate/Blood oxygen sensor</td>
                          <td className="px-4 py-2 text-sm text-gray-900">1</td>
                          <td className="px-4 py-2 text-sm text-gray-900">Biometric health tracking</td>
                          <td className="px-4 py-2 text-sm text-gray-900">Amazon</td>
                          <td className="px-4 py-2 text-sm text-gray-900">$9.99</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-900">Battery</td>
                          <td className="px-4 py-2 text-sm text-gray-900">3</td>
                          <td className="px-4 py-2 text-sm text-gray-900">
                            Three LiPo batteries w/power supply voltage of 11.1V and a capacity of 30,000 mAh.
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900">Amazon</td>
                          <td className="px-4 py-2 text-sm text-gray-900">$17.99 (x3)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-900">Battery Management System</td>
                          <td className="px-4 py-2 text-sm text-gray-900">1</td>
                          <td className="px-4 py-2 text-sm text-gray-900">
                            Battery charging manager to charge LiPo batteries.
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900">Amazon</td>
                          <td className="px-4 py-2 text-sm text-gray-900">$9.56</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-900">Buck Converter</td>
                          <td className="px-4 py-2 text-sm text-gray-900">1</td>
                          <td className="px-4 py-2 text-sm text-gray-900">
                            Voltage step down module to power the Raspberry Pi using the batteries.
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900">Amazon</td>
                          <td className="px-4 py-2 text-sm text-gray-900">$8.99</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm text-gray-900">Carbon Fiber Filament</td>
                          <td className="px-4 py-2 text-sm text-gray-900">1</td>
                          <td className="px-4 py-2 text-sm text-gray-900">Temporarily used to print prototype</td>
                          <td className="px-4 py-2 text-sm text-gray-900">Amazon</td>
                          <td className="px-4 py-2 text-sm text-gray-900">$24.99</td>
                        </tr>
                        <tr className="bg-gray-100 font-bold">
                          <td className="px-4 py-2 text-sm text-gray-900">TOTAL</td>
                          <td className="px-4 py-2 text-sm text-gray-900"></td>
                          <td className="px-4 py-2 text-sm text-gray-900"></td>
                          <td className="px-4 py-2 text-sm text-gray-900"></td>
                          <td className="px-4 py-2 text-sm text-gray-900">$127.47</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900">Construction Process</h3>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg border border-gray-300 overflow-hidden shadow-sm p-4">
                      <div className="flex flex-col items-center">
                        <div className="w-full h-64 flex items-center justify-center">
                          <ImageZoom
                            src="/images/electronics-view.webp"
                            alt="Inside view of the device showing internal components and wiring"
                          />
                        </div>
                        <p className="mt-4 text-center text-gray-600 text-sm">
                          Internal Electronics View
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-300 overflow-hidden shadow-sm p-4">
                      <div className="flex flex-col items-center">
                        <div className="w-full h-64 flex items-center justify-center">
                          <ImageZoom
                            src="/images/mounted-rpi.jpeg"
                            alt="Raspberry Pi mounted in the enclosure"
                            rotation={180}
                          />
                        </div>
                        <p className="mt-4 text-center text-gray-600 text-sm">Raspberry Pi mounted in the enclosure</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-300 overflow-hidden shadow-sm p-4">
                      <div className="flex flex-col items-center">
                        <div className="w-full h-64 flex items-center justify-center">
                          <ImageZoom
                            src="/images/soldered-sensors.jpeg"
                            alt="Sensors and components soldered together on workbench"
                          />
                        </div>
                        <p className="mt-4 text-center text-gray-600 text-sm">
                          Sensors and components soldered together
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-300 overflow-hidden shadow-sm p-4">
                      <div className="flex flex-col items-center">
                        <div className="w-full h-64 flex items-center justify-center">
                          <ImageZoom src="/images/bottom-piece.jpg" alt="3D printed bottom piece of the enclosure" />
                        </div>
                        <p className="mt-4 text-center text-gray-600 text-sm">
                          3D printed bottom piece of enclosure
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-300 overflow-hidden shadow-sm p-4">
                      <div className="flex flex-col items-center">
                        <div className="w-full h-64 flex items-center justify-center">
                          <ImageZoom src="/images/battery-box.jpeg" alt="3D printed battery box with wires" />
                        </div>
                        <p className="mt-4 text-center text-gray-600 text-sm">3D printed battery box with wires</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Testing & Evaluation Tab */}
              <TabsContent value="testing" className="mt-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <ClipboardCheck className="mr-2 h-5 w-5 text-yellow-500" />
                    Testing Procedures
                  </h3>

                  <div className="mt-8 space-y-10">
                    {/* Test 1: Biometric Sensor Accuracy */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h4 className="text-lg font-bold text-gray-800 flex items-center">
                          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-yellow-500 text-white text-sm font-bold mr-3">1</span>
                          Biometric Sensor Accuracy Test
                        </h4>
                      </div>
                      
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Left Column - Test Details */}
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm font-medium text-gray-600">Date: <span className="text-gray-800">4/25/2025</span></p>
                              <p className="text-sm font-medium text-gray-600 mt-2">Location: <span className="text-gray-800">Blazey's classroom</span></p>
                              <p className="text-sm font-medium text-gray-600 mt-2">Materials: <span className="text-gray-800">LifeLine device, commercial oximeter, digital thermometer, laptop</span></p>
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                              <p className="text-sm font-medium text-gray-600">Pass/Fail Criteria: <span className="text-gray-800">Readings within ±5% of control device measurements</span></p>
                              <p className="text-sm font-medium text-gray-600 mt-2">Safety: <span className="text-gray-800">Ensure proper sensor placement</span></p>
                            </div>
                          </div>

                          {/* Right Column - Procedure */}
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm font-medium text-gray-600 mb-2">Procedure:</p>
                              <ol className="space-y-1.5 text-gray-700 list-decimal list-inside">
                                <li>Power LifeLine device on</li>
                                <li>Attach biometric sensors to the participant and record baseline data</li>
                                <li>Compare readings with control devices</li>
                                <li>Repeat after light physical activity</li>
                              </ol>
                            </div>
                          </div>
                        </div>

                        {/* Test Results */}
                        <div className="mt-8">
                          <div className="w-full h-auto max-h-[500px] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center">
                            <ImageZoom 
                              src="/images/biometric-sensor-accuracy.jpg" 
                              alt="Biometric sensor test environment"
                            />
                          </div>
                          <p className="mt-2 text-sm text-center text-gray-500">Figure 1: Biometric sensor test environment</p>
                        </div>
                      </div>
                    </div>

                    {/* Test 2: Web Dashboard Integration */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h4 className="text-lg font-bold text-gray-800 flex items-center">
                          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-yellow-500 text-white text-sm font-bold mr-3">2</span>
                          Web Dashboard Integration Test
                        </h4>
                      </div>
                      
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Left Column - Test Details */}
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm font-medium text-gray-600">Date: <span className="text-gray-800">4/27/2025</span></p>
                              <p className="text-sm font-medium text-gray-600 mt-2">Location: <span className="text-gray-800">Blazey classroom</span></p>
                              <p className="text-sm font-medium text-gray-600 mt-2">Materials: <span className="text-gray-800">LifeLine device, heart rate sensor, laptop</span></p>
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                              <p className="text-sm font-medium text-gray-600">Pass/Fail: <span className="text-gray-800">Data appears within 2 minutes, real-time updates work</span></p>
                              <p className="text-sm font-medium text-gray-600 mt-2">Safety: <span className="text-gray-800">Keep device between 15°F and 200°F</span></p>
                            </div>
                          </div>

                          {/* Right Column - Procedure */}
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm font-medium text-gray-600 mb-2">Procedure:</p>
                              <ol className="space-y-1.5 text-gray-700 list-decimal list-inside">
                                <li>Power on the LifeLine device</li>
                                <li>Wait up to 2 minutes for Wi-Fi</li>
                                <li>Confirm data appears on dashboard</li>
                                <li>Test emergency alerts</li>
                              </ol>
                            </div>
                          </div>
                        </div>

                        {/* Test Results */}
                        <div className="mt-8">
                          <div className="w-full h-auto max-h-[500px] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center">
                            <ImageZoom 
                              src="/images/web-dashboard-integration.png" 
                              alt="Web dashboard integration results"
                            />
                          </div>
                          <p className="mt-2 text-sm text-center text-gray-500">Figure 2: Web dashboard integration results</p>
                        </div>
                      </div>
                    </div>

                    {/* Test Conclusions */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-yellow-50 p-3 rounded-full">
                          <FileSpreadsheet className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-gray-900">Test Conclusions</h3>
                          <p className="mt-2 text-gray-700">
                            The testing procedures confirm that Project LifeLine meets essential technical requirements for both biometric data collection accuracy and real-time data transmission to the web interface. These tests validate the core functionality necessary for the device to serve as a reliable health monitoring system for construction workers in potentially hazardous environments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  )
}
