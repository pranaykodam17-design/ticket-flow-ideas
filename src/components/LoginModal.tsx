import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Lock, Eye, EyeOff, Mail } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo functionality - replace with actual authentication
    alert("Login functionality requires Supabase integration. Please connect Supabase to enable authentication.");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo functionality - replace with actual authentication
    alert("Signup functionality requires Supabase integration. Please connect Supabase to enable authentication.");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <div className="bg-gradient-to-br from-primary via-primary to-primary-light min-h-[600px] relative">
          {/* Header */}
          <DialogHeader className="pt-8 pb-4 text-center">
            <div className="mx-auto w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/30">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
            </div>
            <DialogTitle className="text-white text-2xl font-light tracking-wide">
              AUTHENTICATION
            </DialogTitle>
          </DialogHeader>

          {/* Form Content */}
          <div className="px-8 pb-8">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-sm">
                <TabsTrigger value="login" className="text-white data-[state=active]:bg-white data-[state=active]:text-primary">
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" className="text-white data-[state=active]:bg-white data-[state=active]:text-primary">
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-6 mt-8">
                <form onSubmit={handleLogin} className="space-y-6">
                  {/* Username/Email Field */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                      <User className="w-5 h-5 text-white/70" />
                    </div>
                    <Input
                      type="text"
                      placeholder="USERNAME"
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/50 pl-12 h-14 backdrop-blur-sm focus:bg-white/20 transition-all"
                      required
                    />
                  </div>

                  {/* Password Field */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                      <Lock className="w-5 h-5 text-white/70" />
                    </div>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="PASSWORD"
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/50 pl-12 pr-12 h-14 backdrop-blur-sm focus:bg-white/20 transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                        className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-primary"
                      />
                      <Label htmlFor="remember" className="text-white/80 text-sm">
                        REMEMBER ME
                      </Label>
                    </div>
                    <button
                      type="button"
                      className="text-white/80 text-sm hover:text-white transition-colors"
                    >
                      FORGOT PASSWORD?
                    </button>
                  </div>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    className="w-full h-14 bg-white text-primary hover:bg-white/90 font-semibold text-lg tracking-wide mt-8"
                  >
                    LOGIN
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="space-y-6 mt-8">
                <form onSubmit={handleSignup} className="space-y-6">
                  {/* Email Field */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                      <Mail className="w-5 h-5 text-white/70" />
                    </div>
                    <Input
                      type="email"
                      placeholder="EMAIL"
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/50 pl-12 h-14 backdrop-blur-sm focus:bg-white/20 transition-all"
                      required
                    />
                  </div>

                  {/* Username Field */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                      <User className="w-5 h-5 text-white/70" />
                    </div>
                    <Input
                      type="text"
                      placeholder="USERNAME"
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/50 pl-12 h-14 backdrop-blur-sm focus:bg-white/20 transition-all"
                      required
                    />
                  </div>

                  {/* Password Field */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                      <Lock className="w-5 h-5 text-white/70" />
                    </div>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="PASSWORD"
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/50 pl-12 pr-12 h-14 backdrop-blur-sm focus:bg-white/20 transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms"
                      className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-primary"
                      required
                    />
                    <Label htmlFor="terms" className="text-white/80 text-sm">
                      I agree to the Terms & Conditions
                    </Label>
                  </div>

                  {/* Signup Button */}
                  <Button
                    type="submit"
                    className="w-full h-14 bg-white text-primary hover:bg-white/90 font-semibold text-lg tracking-wide mt-8"
                  >
                    SIGN UP
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;