import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Condition & Privacy Policy</h1>
      <p className='text-md text-gray-1500'>By using Creative Blog's!, you agree to provide accurate information and maintain the security of your account. You retain ownership of your content but grant us a license to use it. You agree not to post harmful or illegal content. We reserve the right to terminate accounts for violations.</p>
      <p> Creative Blog's!,respects your privacy. We collect and use your personal information solely to enhance your experience on our platform. We do not share your information with third parties without your consent. By using our application, you agree to our data practices as outlined in our full Privacy Policy.</p>
      {/* <CallToAction /> */}
    </div>
  )
}