import Header from "@/components/Header";
import DBTStatusChecker from "@/components/DBTStatusChecker";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Download, Users, Shield, Clock, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DBT Awareness Portal
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Learn about Direct Benefit Transfer and ensure your bank account is ready for scholarship payments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary">
                <CheckCircle className="w-5 h-5 mr-2" />
                Check DBT Status
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <BookOpen className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Understanding DBT for Students
              </h2>
              <p className="text-muted-foreground text-lg">
                Direct Benefit Transfer ensures your scholarship money reaches you directly and securely
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-6 h-6 text-warning" />
                    <span>Aadhaar Linked Account</span>
                  </CardTitle>
                  <CardDescription>
                    Basic identity verification with your bank account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Your Aadhaar number is connected to your bank account for identity purposes.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      <span>Identity verification completed</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-muted rounded-full"></div>
                      <span>Cannot receive government transfers yet</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-success" />
                    <span>DBT Enabled Account</span>
                  </CardTitle>
                  <CardDescription>
                    Fully ready to receive government transfers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Your account is activated to receive scholarships and government benefits directly.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Receives scholarship payments automatically</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Faster, transparent transactions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">For Students</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure your scholarship money reaches you without delays
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Faster Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Direct transfers eliminate middlemen and reduce waiting time
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Secure & Transparent</h3>
                <p className="text-sm text-muted-foreground">
                  Government-to-citizen transfers with full transparency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DBT Status Checker */}
      <DBTStatusChecker />

      {/* Resources Section */}
      <section id="resources" className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Resources & Downloads
              </h2>
              <p className="text-muted-foreground">
                Helpful materials for students, teachers, and parents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="card-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg">Step-by-Step Guide</CardTitle>
                  <CardDescription>
                    Complete process to enable DBT for your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg">Teacher's Toolkit</CardTitle>
                  <CardDescription>
                    Presentation materials for PTA meetings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Kit
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg">Multilingual Posters</CardTitle>
                  <CardDescription>
                    Awareness posters in regional languages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Pack
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Spread Awareness</h3>
            <p className="mb-6 opacity-90">
              Share this portal with fellow students, teachers, and parents to ensure everyone knows about DBT
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary">
                <ArrowRight className="w-4 h-4 mr-2" />
                Share Portal Link
              </Button>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Generate QR Code
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;