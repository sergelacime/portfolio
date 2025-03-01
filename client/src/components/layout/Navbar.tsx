import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/experience", label: "Experience" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold cursor-pointer"
            >
              Portfolio
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className={`cursor-pointer ${
                    location === item.path
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </motion.a>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <motion.a
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 ${
                        location === item.path
                          ? "text-primary font-medium"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
