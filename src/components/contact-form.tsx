'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    const { firstName, lastName, email, subject, message } = formData;
    
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setFormState({
        status: 'error',
        message: 'All fields are required.'
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormState({
        status: 'error',
        message: 'Please enter a valid email address.'
      });
      return false;
    }

    if (message.length < 10) {
      setFormState({
        status: 'error',
        message: 'Message must be at least 10 characters long.'
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormState({
      status: 'loading',
      message: ''
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormState({
          status: 'success',
          message: data.message || 'Message sent successfully!'
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setFormState({
          status: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState({
        status: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    }
  };

  const isLoading = formState.status === 'loading';

  return (
    <Card className="glass border-teal-200 dark:border-teal-800 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
          <Send className="h-5 w-5" />
          Send Me a Message
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Status Messages */}
        {formState.message && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            formState.status === 'success' 
              ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800' 
              : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
          }`}>
            {formState.status === 'success' ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <span className="text-sm font-medium">{formState.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="group">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300 dark:hover:border-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="John"
                required
              />
            </div>
            <div className="group">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300 dark:hover:border-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300 dark:hover:border-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="group">
            <label
              htmlFor="subject"
              className="block text-sm font-medium mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300 dark:hover:border-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Project Collaboration"
              required
            />
          </div>

          <div className="group">
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-vertical transition-all duration-300 hover:border-teal-300 dark:hover:border-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Tell me about your project or how we can work together..."
              minLength={10}
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white border-0 px-8 py-3 text-lg font-semibold rounded-xl button-hover disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
