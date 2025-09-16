import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Download, FileText } from "lucide-react";
import StatusBadge from "./StatusBadge";

type VerificationResult = {
  aadhaarLinked: boolean;
  dbtEnabled: boolean;
  bankName: string;
  nextSteps: string[];
};

const DBTStatusChecker = () => {
  const [aadhaarDigits, setAadhaarDigits] = useState("");
  const [accountDigits, setAccountDigits] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);

  // Mock verification logic
  const mockVerification = (aadhaar: string, account: string): VerificationResult => {
    const hash = (aadhaar + account).split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    const status = hash % 3;
    
    const banks = ["SBI", "HDFC Bank", "ICICI Bank", "Axis Bank", "PNB"];
    const bankName = banks[hash % banks.length];

    if (status === 0) {
      return {
        aadhaarLinked: true,
        dbtEnabled: true,
        bankName,
        nextSteps: [
          "✅ Your account is fully ready for DBT transfers",
          "You will automatically receive scholarship payments",
          "Keep your mobile number updated with the bank"
        ]
      };
    } else if (status === 1) {
      return {
        aadhaarLinked: true,
        dbtEnabled: false,
        bankName,
        nextSteps: [
          "Visit your bank branch with Aadhaar card",
          "Request DBT enablement for your account",
          "Submit Aadhaar consent form",
          "Process typically takes 2-3 working days"
        ]
      };
    } else {
      return {
        aadhaarLinked: false,
        dbtEnabled: false,
        bankName,
        nextSteps: [
          "Visit your bank branch immediately",
          "Carry original Aadhaar card and bank passbook", 
          "Request Aadhaar seeding for your account",
          "Enable DBT after Aadhaar linking is complete"
        ]
      };
    }
  };

  const handleCheck = async () => {
    if (aadhaarDigits.length !== 4 || accountDigits.length !== 4) {
      return;
    }

    setIsChecking(true);
    // Simulate API call delay
    setTimeout(() => {
      const verification = mockVerification(aadhaarDigits, accountDigits);
      setResult(verification);
      setIsChecking(false);
    }, 1500);
  };

  const getStatus = () => {
    if (!result) return null;
    
    if (result.aadhaarLinked && result.dbtEnabled) {
      return { type: "success" as const, text: "DBT Enabled Account" };
    } else if (result.aadhaarLinked && !result.dbtEnabled) {
      return { type: "warning" as const, text: "Aadhaar Linked Only" };
    } else {
      return { type: "error" as const, text: "Not Aadhaar Seeded" };
    }
  };

  const status = getStatus();

  return (
    <section id="checker" className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Check Your DBT Status
            </h2>
            <p className="text-muted-foreground">
              Enter the last 4 digits of your Aadhaar and bank account number to check your DBT readiness
            </p>
          </div>

          <Card className="card-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-primary" />
                <span>DBT Status Verification</span>
              </CardTitle>
              <CardDescription>
                This is a demo verification. Real implementation would require secure APIs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="aadhaar">Last 4 digits of Aadhaar</Label>
                  <Input
                    id="aadhaar"
                    type="text"
                    placeholder="XXXX"
                    maxLength={4}
                    value={aadhaarDigits}
                    onChange={(e) => setAadhaarDigits(e.target.value.replace(/\D/g, ''))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account">Last 4 digits of Bank Account</Label>
                  <Input
                    id="account"
                    type="text"
                    placeholder="XXXX"
                    maxLength={4}
                    value={accountDigits}
                    onChange={(e) => setAccountDigits(e.target.value.replace(/\D/g, ''))}
                  />
                </div>
              </div>

              <Button
                onClick={handleCheck}
                disabled={aadhaarDigits.length !== 4 || accountDigits.length !== 4 || isChecking}
                className="w-full"
              >
                {isChecking ? "Checking..." : "Check DBT Status"}
              </Button>

              {result && status && (
                <div className="mt-6 p-6 bg-background rounded-lg border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground">Verification Result</h3>
                      <p className="text-sm text-muted-foreground">Bank: {result.bankName}</p>
                    </div>
                    <StatusBadge status={status.type} text={status.text} />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Next Steps:</h4>
                    <ul className="space-y-1">
                      {result.nextSteps.map((step, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm" className="mr-2">
                      <Download className="w-4 h-4 mr-2" />
                      Download Guide
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      Required Documents
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DBTStatusChecker;