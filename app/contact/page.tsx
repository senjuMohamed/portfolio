"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "omari123x1@gmail.com",
      link: "mailto:omari123x1@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "linkedin.com/in/mohamed-el-oumari-052278251",
      link: "https://www.linkedin.com/in/mohamed-el-oumari-052278251",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-muted-foreground text-lg">
            You can reach me directly via email or LinkedIn.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto space-y-6">
          {contactInfo.map((info, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <motion.a
                  href={info.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex-shrink-0 p-3 rounded-full bg-secondary text-secondary-foreground">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </motion.a>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-gradient-to-br from-[#0a0f4f] to-[#0a0f4f]/80 text-white dark:from-blue-600 dark:to-blue-800">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-3 rounded-full bg-white/10 text-white">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Let's Talk</h3>
                  <p className="text-sm text-white/70">I'm available for freelance projects and full-time positions.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}