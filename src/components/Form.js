import React from "react";
import * as Form from "@radix-ui/react-form";

const FormDemo = () => (
  <Form.Root className="w-[260px]">
    <Form.Field className="grid mb-[10px]" name="email">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-black text-[15px] font-medium leading-[35px] dark:text-white">
          Email
        </Form.Label>
        <Form.Message
          className="text-black text-[13px] dark:text-white opacity-[0.8]"
          match="valueMissing"
        >
          Please enter your email
        </Form.Message>
        <Form.Message
          className="text-black text-[13px] dark:text-white opacity-[0.8]"
          match="typeMismatch"
        >
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="text-black box-border w-full bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-black"
          type="email"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="question">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-black text-[15px] font-medium leading-[35px] dark:text-white">
          Question
        </Form.Label>
        <Form.Message
          className="text-black text-[13px] dark:text-white opacity-[0.8]"
          match="valueMissing"
        >
          Please enter a question
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea
          className="text-black box-border w-full bg-white shadow-black inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-black resize-none"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <button className="box-border w-full text-black shadow-black hover:bg-blue-400 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
        Post question
      </button>
    </Form.Submit>
  </Form.Root>
);

export default FormDemo;
