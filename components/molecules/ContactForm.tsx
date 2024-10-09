import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

type FormData = {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast({
        title: "Form Submitted!",
        description: "Thank you for your interest in our Arabic course.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description:
          "An error occurred while submitting the form. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="bg-emerald-600 px-6 py-4">
        <h2 className="text-2xl font-bold text-white text-center">
          Join Our Arabic Course
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
        <div>
          <Label
            htmlFor="fullName"
            className="text-sm font-medium text-gray-700"
          >
            Full Name
          </Label>
          <Input
            id="fullName"
            {...register("fullName", { required: "Full name is required" })}
            className="mt-1"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div>
          <Label
            htmlFor="phoneNumber"
            className="text-sm font-medium text-gray-700"
          >
            Phone Number
          </Label>
          <Input
            id="phoneNumber"
            type="tel"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^\d{11}$/,
                message: "Please enter a valid phone number",
              },
            })}
            className="mt-1"
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-red-600">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <div>
          <Label
            htmlFor="emailAddress"
            className="text-sm font-medium text-gray-700"
          >
            Email Address
          </Label>
          <Input
            id="emailAddress"
            type="email"
            {...register("emailAddress", {
              required: "Email address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
            className="mt-1"
          />
          {errors.emailAddress && (
            <p className="mt-1 text-xs text-red-600">
              {errors.emailAddress.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Sign Me Up!"
          )}
        </Button>
      </form>
      <div className="px-6 py-4 bg-gray-50 text-center">
        <p className="text-xs text-gray-600">
          By enrolling, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
