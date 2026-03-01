"use client";

import { config } from "@/data/config";
import { profileData } from "@/data/profile";
import { Mail, Phone, MapPin, Github, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="min-h-screen max-w-6xl mx-auto px-4 py-16">
      <SectionHeader
        id="about"
        title="Professional Profile"
        desc="A recruiter-focused snapshot of my background, strengths, and education."
        className="static top-auto mb-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-background/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Summary</CardTitle>
            <CardDescription>{profileData.summary}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm font-medium text-muted-foreground">
              Value I bring to a team:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-sm text-muted-foreground">
              {profileData.valueProposition.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href={`mailto:${config.email}`}>
                <Button className="gap-2">
                  <Mail className="w-4 h-4" />
                  Email Me
                </Button>
              </Link>
              <Link href={config.resumeUrl} target="_blank">
                <Button variant="outline" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Resume
                </Button>
              </Link>
              {config.social.github && (
                <Link href={config.social.github} target="_blank">
                  <Button variant="outline" className="gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </Link>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-background/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Quick Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5" />
              <span>{config.location}</span>
            </div>
            <div className="flex items-start gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 mt-0.5" />
              <span>{config.phone}</span>
            </div>
            <div className="flex items-start gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 mt-0.5" />
              <span>{config.email}</span>
            </div>
            <div className="pt-2">
              <Badge variant="secondary">{config.role}</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card className="bg-background/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {profileData.education.map((item) => (
              <div key={`${item.school}-${item.degree}`} className="space-y-2">
                <h3 className="font-semibold">{item.degree}</h3>
                <p className="text-sm text-muted-foreground">{item.school}</p>
                <p className="text-sm text-muted-foreground">
                  Graduation: {item.graduation}
                  {item.gpa ? ` • GPA: ${item.gpa}` : ""}
                </p>
                <ul className="list-disc ml-5 space-y-1 text-sm text-muted-foreground">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-background/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 space-y-2 text-sm text-muted-foreground">
              {profileData.languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
