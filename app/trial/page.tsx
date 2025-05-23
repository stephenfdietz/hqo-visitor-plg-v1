'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { supabase } from '@/lib/supabase'

export default function TrialSignup() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    buildingAddress: '',
    userType: '' as 'landlord' | 'tenant'
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Sign up with Supabase
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: Math.random().toString(36).slice(-8), // Generate random password
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
          }
        }
      })

      if (authError) throw authError

      // Update profile with additional information
      if (authData.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .update({
            phone: formData.phone,
            building_address: formData.buildingAddress,
            user_type: formData.userType
          })
          .eq('id', authData.user.id)

        if (profileError) throw profileError
      }

      // TODO: Send data to HubSpot
      
      setStep(3) // Move to success step
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white font-['Source_Sans_3']">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Start Your Free Trial</h1>
          
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">I am a:</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant={formData.userType === 'landlord' ? 'default' : 'outline'}
                    className="h-24 text-lg"
                    onClick={() => setFormData(prev => ({ ...prev, userType: 'landlord' }))}
                  >
                    Landlord
                  </Button>
                  <Button
                    variant={formData.userType === 'tenant' ? 'default' : 'outline'}
                    className="h-24 text-lg"
                    onClick={() => setFormData(prev => ({ ...prev, userType: 'tenant' }))}
                  >
                    Tenant
                  </Button>
                </div>
              </div>
              <Button
                className="w-full bg-[#ff4539ff] hover:bg-[#ff4539ff]/90"
                onClick={() => setStep(2)}
                disabled={!formData.userType}
              >
                Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Building Address</label>
                <input
                  type="text"
                  name="buildingAddress"
                  value={formData.buildingAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md"
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[#ff4539ff] hover:bg-[#ff4539ff]/90"
                  disabled={loading}
                >
                  {loading ? 'Creating Account...' : 'Start Free Trial'}
                </Button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center space-y-6">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold">Check Your Email</h2>
              <p className="text-gray-400">
                We've sent a verification link to {formData.email}. Please check your inbox and click the link to verify your account.
              </p>
              <Button
                onClick={() => router.push('/')}
                className="bg-[#ff4539ff] hover:bg-[#ff4539ff]/90"
              >
                Return to Home
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 